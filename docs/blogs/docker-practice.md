# Docker 入门实践

在简单了解 Docker 之后，跟学习任何语言一样，都必须先来一个 Hello world 进一步加深、巩固自己的理解。

## 使用公共镜像

### 获取镜像

镜像的存在是启动容器的前提，所以我们先要获取一个镜像，为此执行如下命令。

```sh
docker image pull docker/getting-started
```

成功之后执行 `docker images` 查看当前镜像，可以发现多了一个叫做 docker/getting-started 的镜像。

### 运行容器

执行 run 命令，启动 getting-started 镜像，生成一个容器。

```sh
docker run -d -p 80:80 docker/getting-started
```

- `-d` 让容器在后台运行。
- `-p 10086:80` 让宿主机器的 10086 端口映射至容器的 80 端口。
- `docker/getting-started` 需要使用的镜像名，如该镜像在本地中不存在则会自动从远程镜像仓库中获取，所以`image pull`操作是可省略的。

执行过后，继续执行`docker container ls`查看当前容器信息、状态，可以发现多了一个 status 为 up（启动）状态的容器，说明容器启动成功了。

因为 docker/getting-started 默认在容器中暴露了 80 供以访问，而且我们对其进行了端口映射， 所以我们通过宿主机器的 ip 加上映射的端口号，比如在浏览器中访问 http://192.168.0.103:10086/ ，就可以看到由 docker/getting-started 容器提供的一个 web 页面。

## 使用自定义镜像，部署自己的应用

在工作、学习中社区的镜像往往不能够满足需求，为此我们会使用自定义镜像。

我们通常会使用 Dockerfile 文件来制作镜像，Dockerfile 是一个文本文件，用来定义该如何创建、运行一个镜像。

下面将介绍如何构建自定义镜像，以及将其运行在 Docker 之中。

下方 demo 源码可从[https://github.com/xu-wen-chao/docker-demos](https://github.com/xu-wen-chao/docker-demos)中查看、获取。

### 实现一个简单的 nodejs 应用

首先执行 `npm init` 初始化一个项目，该项目是一个 nodejs 应用，其根入口文件 index.js 代码如下。

```js
const Koa = require('koa')
const app = new Koa()

app.use((ctx) => {
  ctx.body = 'Hello Docker'
})

app.listen(8000)
```

当运行该脚本的时候，通过浏览器访问部署机器的 8000 端口，浏览器会返回、渲染 Hello Docker 文本。

### 编写 Dockerfile 文件

在项目根目录创建一个 Dockerfile 文件，其内容如下。

```sh
FROM node:latest
COPY . /app
WORKDIR /app
RUN npm i
CMD ["node", "index.js"]
```

- `FROM node:latest`，该镜像基于 node 镜像，冒号后面的是镜像的版本号，这里表示镜像基于最新的 node 镜像。
- `COPY . /app`，将当前根目录的所有文件（除开被.dockerignore 忽略的文件），都复制到镜像的 /app 目录中。
- `WORKDIR /app`，工作目录为 /app ,也就是说镜像、容器默认都是在 /app 目录下执行命令的。
- `RUN npm i`，RUN 用于构建镜像时执行命令，这里执行`npm i`来安装依赖。
- `CMD ["node", "index.js"]`，CMD 为容器启动时执行的命令，这里启动了一个 nodejs 服务。

RUN 和 CMD 都是用来执行命令，相似但有以下不同。

1. RUN 是在构建镜像阶段执行，执行后的产物都会打包进构建出来的 image 中，所以一般用于应用环境依赖的安装，而 CMD 是在容器启动的时候执行。
2. 一个 Dockerfile 中能够有个 RUN 指令，而 CMD 只能有一个。

### 构建镜像

有了 Dockerfile 之后，我们可以根据 Dockerfile 构建镜像，执行以下命令。

```sh
docker build -t hello-docker .
```

- `build`，构建镜像。
- `-t`，镜像的名称，这里是 hello-docker。
- `.`，命令的最后，用于告诉 Docker 应该在哪查找 Dockerfile 文件，这里用的是当前项目根目录。

构建成功之后，执行`docker image ls`，可以看到一个名为 hello-docker 的镜像文件。

### 生成、运行容器

执行下方命令，以 hello-docker 镜像生成、运行一个容器实例。

```sh
docker run -d -p 8000:8000 hello-docker
```

- `-d`，后台执行。
- `-p 8000:8000`，宿主机器的 8000 端口映射至容器的 8000 端口。

启动成功之后，执行`docker container ls`可以看见多出了一个 status 为 up 的容器。我们访问宿主机器的 8000 端口，比如 http://192.168.0.103:8000/ ，此时可看见浏览器返回了 Hello Docker 文本，至此我们的自定义镜像、容器已经成功部署运行。

## 更新应用

随着新需求的到来，我们需要更新应用。

### 更新源码

假设需求需要在输出文本中换行补充 Updated!!! 。那么如下修改 index.js 源码。

```js
const Koa = require('koa')
const app = new Koa()

app.use((ctx) => {
  ctx.body = 'Hello Docker\nUpdated!!!'
})

app.listen(8000)
```

### 更新镜像

修改了源码，自然需要更新由源码构建的镜像。我们进入项目根目录中执行下方命令，重新构建镜像。

```sh
docker build -t hello-docker .
```

### 启动容器

镜像更新成功之后，需要根据新镜像启动新的容器，执行下方命令。

```sh
docker run -d -p 8000:8000 hello-docker
```

会看见如下错误信息

```sh
docker: Error response from daemon: driver failed programming external connectivity on endpoint priceless_jepsen (fdf5a00787d29dcddbfa7bcf85b0ac5ec8ed3d5253060053c421050c1f64c101): Bind for 0.0.0.0:8000 failed: port is already allocated.
```

是因为我们上次运行的 hello-docker 容器还在运行中，占用着 8000 端口。所以我们应该替换旧的容器。

1. 首先查看获取正在运行的 hello-docker 容器的 id。

   执行。

   ```sh
   docker ps
   ```

   或者。

   ```sh
   docker container ls
   ```

2. 根据 id 停止正在运行的容器。

   ```sh
   docker stop <容器id>
   ```

3. 一旦容器停止了，可以删了它。

   ```sh
   docker rm <容器id>
   ```

   `rm` 默认不能移除正在运行的容器，但是加上 `-f` 参数就可以。

   ```sh
   docker rm -f <容器id>
   ```

4. 重启新容器。

   ```sh
   docker run -d -p 8000:8000 hello-docker
   ```

重启成功之后，打开浏览器访问宿主机器的 8000 端口，可以看到新增的文本，说明应用更新成功。

## 通过 Docker Hub 共享应用

在本地开发完之后，应用要部署至服务器，通过前面的了解可知应用相当于一个镜像，所以需要共享镜像。下面介绍如何将镜像推送至[Docker Hub](https://hub.docker.com/)，以便在任何地方都能够快速获取镜像。

下方的 xuwenchao66 字样为 Docker Hub 的用户名，请替换为自己的。

### 创建一个仓库

1. 登陆[Docker Hub](https://hub.docker.com/)，如无账号先注册。
2. 点击 Create a Repository，创建一个镜像仓库。
3. 进入创建交互页面，输入仓库名。这里用 hello-docker，注意 Visibility 选择的是默认的 public，这样所有人才可见。
4. 点击下方 create 按钮，然后可以看见成功创建了一个名为 xuwenchao66/hello-docker 的仓库，这就是我们接下来要推送镜像的目标仓库。

### 本地登陆 Docker Hub

在推送之前，必须在本地进行 Docker Hub 的账户登陆。执行下方命令，根据提示输入密码，进行登陆。

```sh
docker login -u xuwenchao66
```

### 推送镜像

1. 在创建成功后，在 web 界面右方可看见`docker push xuwenchao66/hello-docker:tagname`这样的命令，提示我们可通过该命令进行镜像推送。执行下方命令，这里忽略了 tagname（可忽略，默认为 latest）。

   ```sh
   docker push xuwenchao66/hello-docker
   ```

   可发现控制台出现了如下提示`An image does not exist locally with the tag: xuwenchao66/hello-docker`，告诉我们本地不存在名为 xuwenchao66/hello-docker 的镜像，所以无法进行推送。

2. 使用[docker tag](https://docs.docker.com/engine/reference/commandline/tag/)以本地的 hello-docker 镜像为参照创建一个不同名的叫做 xuwenchao66/hello-docker 的镜像。

   ```sh
   docker tag hello-docker xuwenchao66/hello-docker
   ```

   成功之后执行`docker image ls`，可以看见多了一个镜像与原有的 hello-docker 镜像 id 一致，但是名字不同。

3. 最后再次进行推送。

   ```sh
   docker push xuwenchao66/hello-docker
   ```

   执行成功之后刷新目标仓库的 web 界面，可以看见成功发布一个 TAG 为 latest 的镜像。

## 参考

1. [https://docs.docker.com/get-started/](https://docs.docker.com/get-started/)
2. [Docker 入门教程](http://www.ruanyifeng.com/blog/2018/02/docker-tutorial.html)
