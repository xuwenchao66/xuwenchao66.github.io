# Docker 入门实践(1): 使用自定义镜像，部署自己的应用

在工作、学习中社区的镜像往往不能够满足需求，为此我们会使用自定义镜像。

我们通常会使用 Dockerfile 文件来制作镜像，Dockerfile 是一个文本文件，用来定义该如何创建、运行一个镜像。

下面将介绍如何构建自定义镜像，以及将其运行在 Docker 之中。

下方 demo 源码可从[https://github.com/xuwenchao66/docker-demos](https://github.com/xuwenchao66/docker-demos)中查看、获取。

## 实现一个简单的 nodejs 应用

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

## 编写 Dockerfile 文件

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

## 构建镜像

有了 Dockerfile 之后，我们可以根据 Dockerfile 构建镜像，执行以下命令。

```sh
docker build -t hello-docker .
```

- `build`，构建镜像。
- `-t`，镜像的名称，这里是 hello-docker。
- `.`，命令的最后，用于告诉 Docker 应该在哪查找 Dockerfile 文件，这里用的是当前项目根目录。

构建成功之后，执行`docker image ls`，可以看到一个名为 hello-docker 的镜像文件。

## 生成、运行容器

执行下方命令，以 hello-docker 镜像生成、运行一个容器实例。

```sh
docker run -d -p 8000:8000 hello-docker
```

- `-d`，后台执行。
- `-p 8000:8000`，宿主机器的 8000 端口映射至容器的 8000 端口。

启动成功之后，执行`docker container ls`可以看见多出了一个 status 为 up 的容器。我们访问宿主机器的 8000 端口，比如 http://192.168.0.103:8000/ ，此时可看见浏览器返回了 Hello Docker 文本，至此我们的自定义镜像、容器已经成功部署运行。

## 参考

1. [https://docs.docker.com/get-started/](https://docs.docker.com/get-started/)
2. [Docker 入门教程](http://www.ruanyifeng.com/blog/2018/02/docker-tutorial.html)
