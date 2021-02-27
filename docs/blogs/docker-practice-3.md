# Docker 入门实践(3): 通过 Docker Hub 共享应用

在本地开发完之后，应用要部署至服务器，通过前面的了解可知应用相当于一个镜像，所以需要想办法将镜像移动至服务端才能完成部署。

下面介绍如何将镜像推送至[Docker Hub](https://hub.docker.com/)，以便在任何地方都能够快速获取镜像。

下方的 xuwenchao66 字样为 Docker Hub 的用户名，请替换为自己的。

## 创建一个仓库

1. 登陆[Docker Hub](https://hub.docker.com/)，如无账号先注册。
2. 点击 Create a Repository，创建一个镜像仓库。
3. 进入创建交互页面，输入仓库名。这里用 hello-docker，注意 Visibility 选择的是默认的 public，这样所有人才可见。
4. 点击下方 create 按钮，然后可以看见成功创建了一个名为 xuwenchao66/hello-docker 的仓库，这就是我们接下来要推送镜像的目标仓库。

## 本地登陆 Docker Hub

在推送之前，必须在本地进行 Docker Hub 的账户登陆。执行下方命令，根据提示输入密码，进行登陆。

```sh
docker login -u xuwenchao66
```

## 推送镜像

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
