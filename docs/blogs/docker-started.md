# Docker 入门

## 简介

### Docker 是什么

Docker 是一个开放平台，能够用于开发、传输、运行应用。Docker 能够将**应用**与**基础设施**（比如应用的运行环境、开发环境等）解耦。
通过 Docker 能够管理基础设施跟管理应用一样方便，无论是在开发、测试还是生成环境快速、一致地部署应用，减少从开发到软件交付的时间。
Docker 能将应用打包、运行在一个**独立**的环境，这个环境称为容器（container）。得益于**独立**的这一特性，能够同时运行多个容器在一个主机上。
容器是一个轻量且包含了运行应用所需要的所有依赖，所以通过 Docker 运行应用，当前主机无需关心需要提前安装任何运行环境依赖，因为应用及其运行环境都可打包在容器之中了。
所以通过共享容器，能确保在任何环境都有一致的运行效果。

### Docker 系统架构

Docker 使用 **client-server** 的架构，Docker 客户端与 Docker 后台程序（服务端）进行通讯，Docker 后台程序负责构建、运行以及分配 Docker 容器。
Docker 客户端以及 Docker 后台程序可以运行在同一系统中，Docker 客户端也可以连接远程的 Docker 后台程序，二者通过 REST API 通讯。

Docker 是使用 Go 语言来编写，利用 linux 内核的一些特性来完成其功能。Docker 使用 linux 的 namespaces 来为容器提供独立的工作环境，当运行容器的时候，Docker 为容器创建了对应的 namespaces 集合。

namespaces 是 linux 内核用来实现资源隔离的方式，不同的 namespaces 进程拥有独立、互不干扰的系统资源。

![docker-architecture](https://docs.docker.com/engine/images/architecture.svg)

### Docker 基本概念

#### Docker daemon（后台程序）

Docker daemon (dockerd)监听着 Docker API 请求，以及管理 Docker 相关组件比如 images（镜像）、containers（容器）、networks（网络）、volumes（卷）等等。一个后台程序还能与其他后台程序通讯，来管理 Docker 服务。

#### Docker client（客户端）

Docker client (docker) 是用户与 Docker 进行交互的主要方式。当你执行命令，比如`docker run`的时候，客户端将命令发送给的 daemon（后台程序），然后由后台程序执行。执行的命名其实就是调用 Docker API，所以一个 Docker 客户端能够与多个后台程序通讯。

#### Image（镜像）

镜像是一个只读模板，用于说明该如何创建一个 Docker 容器。通常一个镜像会基于另一个镜像，以及一些额外的定制化。比如，我们需要一个能够构建、运行前端应用的容器，那么就需要一个基础镜像，该镜像基于 nodejs 镜像，以及需要安装了诸如 nginx 的 web server，还有一些基础配置，确保我们能在该镜像创建的容器中构建、运行我们的应用。

你可以使用自定义镜像，也可以使用别人已经创建、发布在公共镜像仓库的镜像。你可以通过 Dockerfile 文件来创建一个镜像，Dockerfile 通过简单的语法说明、定义创建、运行一个镜像所需步骤。Dockerfile 中的每个说明都在 image 上创建一个 layer，当修改 Dockerfile 以及重新构建 image 的时候，只有修改了的 layer 才需要重新构建。这也是为什么 Docker 比起传统虚拟技术要更加轻量、快速。

#### Container（容器）

容器是一个可运行的镜像实例，你能够通过 Docker API 或命令行来对容器进行创建、启动、停止、删除等操作。一个容器能够连接多个 networks，关联存储，甚至可以根据当前容器的状态创建一个新的镜像。

容器默认与其他容器，以及宿主机器是相对隔离的。当然这个“隔离”的程度也是可控、可自定义的。

容器由镜像以及当我们启动、创建容器的参数来定义。当一个容器被删除时，默认在运行期间的状态改变以及产生的持久存储都会被清除、重置。

#### Docker registries（镜像仓库）

Docker registries 用于存储 Docker 镜像，[Docker Hub](https://hub.docker.com/)就是官方的一个公共镜像仓库，registry 是可配置的，我们可以配置为国内仓库，甚至私有的仓库。

当我们执行 `docker pull`或`docker run`，如本地不存在所需镜像，Docker 会去配置中的 registry 拉取目标镜像。当执行`docker push`的时候会将镜像发布至配置好的 registry 中。

### Docker 可以用来做什么？

#### 1. 快速、一致的交付应用

Docker 能够让整个软件开发生命周期如流水线般更高效地进行，让开发者始终在一个标准、一致的环境中进行工作。容器非常适用持续集成、持续交付的工作流。

考虑如下应用场景：

- 在开发初期，本地环境写代码，让应用运行在本地的 Docker，与同事之间的工作共享也是通过 Docker 容器。
- 本地开发完成之后，通过 Docker 将应用推送、部署在测试环境，供相关人员进行验收测试。
- 当发现 bug 的时候，开发人员在本地修复 bug 之后，将改动再次推送、部署到测试环境供相关人员进行 bug 修复验证。
- 当测试验收通过之后，只需要将整个流程中更新后的镜像推送、部署至生产环境即可。
  因为整个流程中应用的运行环境都是一致的，所以再也不会出现“我本地是没问题的啊”这类的问题了，而且也免去了在各个环境中安装应用运行环境（比如 nodejs）这一重复工作，提高了软件的交付效率。

#### 2. 快速、弹性部署

Docker 的“容器”这一特性，让其十分便携。容器能够运行在任何环境，比如个人电脑、物理或虚拟主机。Docker 的便携、轻量，快捷迁移，让动态扩容、缩容变得更加简单。

#### 3. 在同一硬件资源中进行更多的工作，更高效的利用硬件资源

因为 Docker 的独立是通过 linux 内核的 namespaces 来实现的，所以容器的应用进程其实还是运行在宿主内核中，容器中只包含了必要的运行依赖，而不是像传统虚拟机一样需要先模拟一套完整的操作系统。
所以 Docker 能够同时保证容器独立、以及启动运行效率，一个主机上可以稳定运行多个容器，从而更高效地利用硬件资源。

## 安装

以下示例均在 ubuntu 20.04 下进行。

Docker 可安装在各个平台， 分别有 Desktop 和 Server，Desktop 如其名就是带有可视化桌面的客户端，适用于 Mac 和 Windows 系统，而且 linux 则是安装 Server。

从[https://docs.docker.com/engine/install/](https://docs.docker.com/engine/install/)中可查看不同平台下 Docker 的安装方法。

安装成功后，可执行`docker version`，获取当前所安装的 Docker 信息。

## 安装后的可选操作

### 使用非 root 用户管理 Docker

因为 Docker 后台程序绑定了 Unix socket ，Unix socket 默认归属于 root 用户，其它用户可以通过 sudo 访问。Docker 后台永远以 root 用户运行。

当然这一默认行为会有一定的安全风险，可通过[https://docs.docker.com/engine/security/#docker-daemon-attack-surface](https://docs.docker.com/engine/security/#docker-daemon-attack-surface)了解，
为此 Docker 现有一实验性特性，能够通过非 root 用户运行 Docker 后台，可从[https://docs.docker.com/engine/security/rootless/](https://docs.docker.com/engine/security/rootless/)了解。

所以在执行 Docker 相关命令的时候，非 root 用户需要加上 sudo 前缀，如`sudo docker version`。

如果觉得每次输入 sudo 太麻烦，可以将当前用户添加至 docker 分组。执行如下命令：

1. 如果没有 docker 这个分组，则需先创建。（安装启动 docker 已默认创建该分组）。可通过查看系统的 `/etc/group` 文件来确定分组是否已存在。

   ```sh
   sudo groupadd docker
   ```

2. 将当前用户添加至 docker 分组。下方的`-aG`，a 是 add、append，G 是 group，整条命令就是将当前用户添加至 docker 分组。

   ```sh
   sudo usermod -aG docker $USER
   ```

添加成功后重新登入该账户，执行 Docker 相关命令就不用再加上 sudo 先了。

### 配置 Docker 开机自启动

大多数 Linux 系统都是通过 systemd 来管理服务的开机自启动。在 Debian 和 Ubuntu 中 Docker 服务是默认随开机自启动的。

更多的安装后可选操作可查看[https://docs.docker.com/engine/install/linux-postinstall/](https://docs.docker.com/engine/install/linux-postinstall/)。

如在想要手动启动这一特性，可执行以下命令：

```sh
sudo systemctl enable docker.service
sudo systemctl enable containerd.service
```

如想要关闭开机自启动，可执行以下命令。

```sh
sudo systemctl disable docker.service
sudo systemctl disable containerd.service
```

## 设置国内镜像加速

Docker 默认从国外的 Docker Hub 拉取镜像，因不可抵抗因素，这个过程会变得非常困难。所以可以将镜像源设置为国内的云服务商，来加速镜像拉取。可多设置几个，防止单个源宕机。

编辑 `/etc/docker/daemon.json` 文件，如不存在则创建。在文件中添加如下内容：

```json
{
  "registry-mirrors": [
    "https://hub-mirror.c.163.com",
    "https://registry.docker-cn.com",
    "https://mirror.baidubce.com"
  ]
}
```

保存修改之后，执行如下命令：

1. 重载所有修改过的服务配置文件。

   ```sh
   sudo systemctl daemon-reload
   ```

2. 重启 Docker 服务。

   ```sh
   sudo systemctl restart docker
   ```

最后可执行`docker info`,如输出中存在下方信息，则说明配置成功。

```sh
 Registry Mirrors:
  https://hub-mirror.c.163.com/
  https://registry.docker-cn.com/
  https://mirror.baidubce.com/
```

## 安装可视化管理工具

为了更方便快捷、低成本地去管理我们的 Docker，我们可以使用安装使用[portainer](https://github.com/portainer/portainer)。

portainer 是一个轻量级的 Docker 环境可视化管理工具。有了它能够仅通过可视化的 web 界面交互，轻松地对 Docker 环境进行管理、维护，而无需执行各种 Docker 命令。

### 安装 portainer

为了方便管理、部署，这里选用了 Docker 的方式来进行安装。

1. 首先创建一个卷用于 portainer 的数据持久化。

   ```sh
   docker volume create portainer_data
   ```

2. 安装启动。

   ```sh
   docker run -d -p 8000:8000 -p 9000:9000 --name=portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce
   ```

   run 是将 portainer 镜像生成容器（如镜像不存在会自动去远程下载），然后启动容器。

   -d 通过后台运行，两个 -p 是将容器的 8000 和 9000 端口分别映射到主机的 8000 和 9000 端口，因为 portainer 默认将其 UI 服务暴露在 9000 端口，TCP 通道暴露在 8000 端口，所以如果没有使用 TCP 通过可以不对 8000 端口进行映射。

   --restart=always 表示 Docker 重启后，该容器也会随着重启。两个-v，一个是用于与当前 Docker 的守护进程通信，另一个是 portainer 的数据持久化。

### 访问、配置 portainer

安装成功之后通过访问主机的 9000 端口即可访问 portainer 的 UI 界面。如主机 ip 为 192.168.0.103，则通过浏览器访问 http://192.168.0.103:9000/ 。

初次打开需要进行基本配置，管理员账号密码设置以及需要管理的环境类型选择。至此 portainer 的基本安装配置已经完成。

关于 portainer 的更多详情请查看[https://documentation.portainer.io/](https://documentation.portainer.io/)。

## 参考

1. [https://docs.docker.com/](https://docs.docker.com/)
2. [https://docs.docker.com/get-started/overview/](https://docs.docker.com/get-started/overview/)
3. [Docker — 从入门到实践](https://vuepress.mirror.docker-practice.com/)
4. [Docker 入门教程](http://www.ruanyifeng.com/blog/2018/02/docker-tutorial.html)
