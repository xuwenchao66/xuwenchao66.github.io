# Docker 入门实践(2): 更新应用

随着新需求的到来，我们需要重新编码，然后更新应用。

## 更新源码

假设需求需要在输出文本中换行补充 Updated!!! 。那么如下修改 index.js 源码。

```js
const Koa = require('koa')
const app = new Koa()

app.use((ctx) => {
  ctx.body = 'Hello Docker\nUpdated!!!'
})

app.listen(8000)
```

## 更新镜像

修改了源码，自然需要更新由源码构建的镜像。我们进入项目根目录中执行下方命令，重新构建镜像。

```sh
docker build -t hello-docker .
```

## 启动容器

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

   根据容器名称等信息获取对应的容器 id。

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

## 参考

1. [https://docs.docker.com/get-started/03_updating_app/](https://docs.docker.com/get-started/03_updating_app/)
