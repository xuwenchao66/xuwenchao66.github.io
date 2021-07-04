# Docker 入门实践(4): 不通过 registry 共享镜像

有些时候我们希望不通过 `Docker hub` 或者私有的 `registry` 就能共享、传输镜像。比如在内部测试的时候，希望能够通过 `ftp`、`scp` 等简单的文件传输即可完成镜像的共享。

下面将介绍如何将镜像文件打包成 `tar` 压缩文件，以及如何将该 `tar` 文件加载为镜像。

## 使用 docker save & docker load

### 使用 docker save 将镜像输出为归档文件

[docker save](https://docs.docker.com/engine/reference/commandline/save/) 可用于保存一个或多个**镜像**为归档文件，默认使用的是标准输出流。该归档文件同时保存了镜像的 `layers`、`tags`、`versions` 等。

使用方法如 `docker save [OPTIONS] IMAGE [IMAGE...]`。

还使用之前的 `hello-docker` 镜像为例，执行：

```sh
docker save hello-docker > hello-docker.tar
```

或：

```sh
docker save --output hello-docker.tar hello-docker
```

执行成功之后，可以看见当前目录多了一个名为 `hello-docker.tar` 的文件。

### 使用 docker load 加载归档文件为镜像

通过上一步骤我们得到了一个 `tar` 归档文件，这时候可以将该文件用自己喜欢的方式传输至任意主机，然后通过 [docker load](https://docs.docker.com/engine/reference/commandline/load/) 来加载该归档文件为镜像。

执行下方命令：

```sh
docker load < hello-docker.tar
```

或者：

```sh
docker load --input hello-docker.tar
```

成功之后执行 `docker images` 可以看见 `hello-docker` 镜像。有了镜像文件之后就可以跟往常一样通过镜像启动我们的容器了。

## 使用 docker export & docker import

### 使用 docker export 将容器输出为归档文件

[docker export](https://docs.docker.com/engine/reference/commandline/export/) 能够将**容器**文件系统输出为归档文件。`docker export` 不会输出与容器相关联的 `volumes`（卷）的内容。比如一个卷挂载在一个容器中，`docker export` 只会输入该容器卷的目录，但是不包含该目录的内容。

执行如下命令：

```sh
docker export [容器名] > hello-docker.tar
```

或：

```sh
docker export --output="hello-docker.tar" [容器名]
```

执行成功之后，可以看到 `hello-docker.tar` 文件。

### 使用 docker import 导入归档文件为镜像

[docker import](https://docs.docker.com/engine/reference/commandline/import/) 能够将归档的压缩文件导入为镜像。

执行下方命令，可以发现多了一个没有标记的镜像，其 `REPOSITORY` 和 `TAG` 都为 `none`。

```sh
docker import hello-docker.tar
```

为了方便查找一般使用该命令的时候都会为其指定标记，如下：

```sh
docker import hello-docker.tar new-image:latest
```

或者使用管道操作从标准输出流导出。

```sh
cat hello-docker.tar | docker import - new-image:latest
```

执行成功之后可以发现对一个 new-image:latest 的镜像。

## docker save VS docker export

1. `docker save` 的操作对象是镜像，而 `docker export` 的操作对象是容器。
2. `docker save` 能够保存镜像的 `layers`、`tags`、`versions` 等信息，而 `docker export` 只是输出容器的快照而已，不包含 `layers`、`tags`、`versions` 等信息。（这一点可以通过 `docker history` 查看双方产生的镜像历史层不同可确认）。

## docker load VS docker import

1. `docker load` 一般用于加载 `docker save` 的产物，而 `docker import` 一般用于加载 `docker export` 的产物。
2. 因为 `docker save` 的产物带有 `layers`、`tags`、`versions` 等信息，所以 `docker load` 只需指定文件无需额外参数即可产生一样的镜像文件。而 `docker export` 的产物不带上述信息，所以使用 `docker import` 的时候能指定镜像名称 & `tag`，以及能够通过 `--change` 参数将新的 `Dockerfile` 指令应用于创建的镜像中。

## 参考

1. [Docker: Transferring Docker Images Without Registry](https://medium.com/@sanketmeghani/docker-transferring-docker-images-without-registry-2ed50726495f)
2. [Docker — Import vs load](https://medium.com/bb-tutorials-and-thoughts/docker-import-vs-load-91d418f0073c)
3. [Docker — export vs save](https://medium.com/bb-tutorials-and-thoughts/docker-export-vs-save-7053504546e5)
