# Docker 入门实践

在简单了解 Docker 之后，跟学习任何语言一样，都必须先来一个 `Hello world` 进一步加深自己的理解。

## 使用公共镜像

### 获取镜像

镜像的存在是启动容器的前提，所以我们先要获取一个镜像，为此执行如下命令。

```sh
docker image pull docker/getting-started
```

成功之后执行 `docker images` 查看当前镜像，可以发现多了一个叫做 `docker/getting-started` 的镜像。

### 运行容器

执行如 run 命令，启动 getting-started 镜像，生成一个容器。

```sh
docker run -d -p 80:80 docker/getting-started
```

- `-d` 让容器在后台运行
- `-p 10086:80` 让宿主及其的 10086 端口映射至容器的 80 端口
- `docker/getting-started` 需要使用的镜像名

执行过后，继续执行`docker container ls`查看当前容器信息、状态，可以发现多了一个 status 为 up（启动）状态的容器，说明容器启动成功了。

因为 `docker/getting-started` 默认在容器中暴露了 80 供以访问，而且我们对其进行了端口映射， 所以我们通过宿主机器的 ip 加上映射的端口号，比如在浏览器中访问 `http://192.168.0.103:10086/` ，就可以看到由 `docker/getting-started` 容器提供的一个 web 页面。
