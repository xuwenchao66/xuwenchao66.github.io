# Docker 安装

## 基本安装

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

2. 将当前用户添加至 docker 分组。下方的`-aG`，a 是 add、append，G 是 group，下方命令就是将当前用户添加至 docker 分组。

   ```sh
   sudo usermod -aG docker $USER
   ```

添加成功后重新登入该账户，执行 Docker 相关命令就不用再加上 sudo 先了。

### 配置 Docker 开机自启动

大多数 Linux 系统都是通过 systemd 来管理服务的开机自启动。在 Debian 和 Ubuntu 中 Docker 服务是默认随开机自启动的。

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

更多的安装后可选操作可查看[https://docs.docker.com/engine/install/linux-postinstall/](https://docs.docker.com/engine/install/linux-postinstall/)。

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

portainer 是一个轻量级的 Docker 可视化管理工具。有了它能够仅通过可视化的 web 界面交互，轻松地对 Docker 环境进行管理、维护，而无需执行各种 Docker 命令。

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

   -d 通过后台运行，两个 -p 是将容器的 8000 和 9000 端口分别映射到主机的 8000 和 9000 端口，因为 portainer 默认将其 UI 服务暴露在 9000 端口，TCP 通道暴露在 8000 端口，所以如果没有使用 TCP 通道这特性可以不对 8000 端口进行映射。

   --restart=always 表示 Docker 重启后，该容器也会随着重启。两个-v，一个是用于与当前 Docker 的守护进程通信，另一个是 portainer 的数据持久化。

### 访问、初始化配置 portainer

安装成功之后通过访问主机的 9000 端口即可访问 portainer 的 UI 界面。如主机 ip 为 192.168.0.103，则通过浏览器访问 http://192.168.0.103:9000/ 。

初次打开需要进行基本配置，管理员账号密码设置以及需要管理的环境类型选择。至此 portainer 的基本安装配置已经完成。

关于 portainer 的更多详情请查看[https://documentation.portainer.io/](https://documentation.portainer.io/)。

## 参考

1. [https://docs.docker.com/engine/install/](https://docs.docker.com/engine/install/)
2. [https://docs.docker.com/engine/install/linux-postinstall/](https://docs.docker.com/engine/install/linux-postinstall/)
