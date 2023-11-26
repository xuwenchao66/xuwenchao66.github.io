(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{376:function(e,t,r){"use strict";r.r(t);var a=r(10),s=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"docker-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-安装"}},[e._v("#")]),e._v(" Docker 安装")]),e._v(" "),t("h2",{attrs:{id:"基本安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本安装"}},[e._v("#")]),e._v(" 基本安装")]),e._v(" "),t("p",[e._v("以下示例均在 "),t("code",[e._v("ubuntu 20.04")]),e._v(" 下进行。")]),e._v(" "),t("p",[t("code",[e._v("Docker")]),e._v(" 可安装在各个平台， 分别有 "),t("code",[e._v("Desktop")]),e._v(" 和 "),t("code",[e._v("Server")]),e._v("，"),t("code",[e._v("Desktop")]),e._v(" 如其名就是带有可视化桌面的客户端，适用于 "),t("code",[e._v("Mac")]),e._v(" 和 "),t("code",[e._v("Windows")]),e._v(" 系统，而且 "),t("code",[e._v("Linux")]),e._v(" 则是安装 "),t("code",[e._v("Server")]),e._v("。")]),e._v(" "),t("p",[e._v("从 "),t("a",{attrs:{href:"https://docs.docker.com/engine/install/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.docker.com/engine/install/"),t("OutboundLink")],1),e._v(" 中可查看不同平台下 "),t("code",[e._v("Docker")]),e._v(" 的安装方法。")]),e._v(" "),t("p",[e._v("安装成功后，可执行 "),t("code",[e._v("docker version")]),e._v("，获取当前所安装的 "),t("code",[e._v("Docker")]),e._v(" 信息。")]),e._v(" "),t("h2",{attrs:{id:"安装后的可选操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装后的可选操作"}},[e._v("#")]),e._v(" 安装后的可选操作")]),e._v(" "),t("h3",{attrs:{id:"使用非-root-用户管理-docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用非-root-用户管理-docker"}},[e._v("#")]),e._v(" 使用非 root 用户管理 Docker")]),e._v(" "),t("p",[e._v("因为 "),t("code",[e._v("Docker")]),e._v(" 后台程序绑定了 "),t("code",[e._v("Unix socket")]),e._v(" ，"),t("code",[e._v("Unix socket")]),e._v(" 默认归属于 "),t("code",[e._v("root")]),e._v(" 用户，其它用户可以通过 "),t("code",[e._v("sudo")]),e._v(" 访问。"),t("code",[e._v("Docker")]),e._v(" 后台永远以 "),t("code",[e._v("root")]),e._v(" 用户运行。")]),e._v(" "),t("p",[e._v("当然这一默认行为会有一定的安全风险，可通过 "),t("a",{attrs:{href:"https://docs.docker.com/engine/security/#docker-daemon-attack-surface",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.docker.com/engine/security/#docker-daemon-attack-surface"),t("OutboundLink")],1),e._v("\n了解，\n为此 "),t("code",[e._v("Docker")]),e._v(" 现有一实验性特性，能够通过非 "),t("code",[e._v("root")]),e._v(" 用户运行 "),t("code",[e._v("Docker")]),e._v(" 后台，可从 "),t("a",{attrs:{href:"https://docs.docker.com/engine/security/rootless/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.docker.com/engine/security/rootless/"),t("OutboundLink")],1),e._v(" 了解。")]),e._v(" "),t("p",[e._v("所以在执行 "),t("code",[e._v("Docker")]),e._v(" 相关命令的时候，非 "),t("code",[e._v("root")]),e._v(" 用户需要加上 "),t("code",[e._v("sudo")]),e._v(" 前缀，如 "),t("code",[e._v("sudo docker version")]),e._v("。")]),e._v(" "),t("p",[e._v("如果觉得每次输入 "),t("code",[e._v("sudo")]),e._v(" 太麻烦，可以将当前用户添加至 "),t("code",[e._v("docker")]),e._v(" 分组。执行如下命令：")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("如果没有 "),t("code",[e._v("docker")]),e._v(" 这个分组，则需先创建。（安装启动 "),t("code",[e._v("docker")]),e._v(" 已默认创建该分组）。可通过查看系统的 "),t("code",[e._v("/etc/group")]),e._v(" 文件来确定分组是否已存在。")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("groupadd")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v("\n")])])])]),e._v(" "),t("li",[t("p",[e._v("将当前用户添加至 "),t("code",[e._v("docker")]),e._v(" 分组。下方的 "),t("code",[e._v("-aG")]),e._v("，"),t("code",[e._v("a")]),e._v(" 是 "),t("code",[e._v("append")]),e._v(" 的意思，"),t("code",[e._v("G")]),e._v(" 是 "),t("code",[e._v("group")]),e._v("，下方命令就是将当前用户添加至 "),t("code",[e._v("docker")]),e._v(" 分组。")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("usermod")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-aG")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("$USER")]),e._v("\n")])])])])]),e._v(" "),t("p",[e._v("添加成功后重新登入该账户，执行 "),t("code",[e._v("Docker")]),e._v(" 相关命令就不用再加上 "),t("code",[e._v("sudo")]),e._v(" 先了。")]),e._v(" "),t("h3",{attrs:{id:"配置-docker-开机自启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置-docker-开机自启动"}},[e._v("#")]),e._v(" 配置 Docker 开机自启动")]),e._v(" "),t("p",[e._v("大多数 "),t("code",[e._v("Linux")]),e._v(" 系统都是通过 "),t("code",[e._v("systemd")]),e._v(" 来管理服务的开机自启动。在 "),t("code",[e._v("Debian")]),e._v(" 和 "),t("code",[e._v("Ubuntu")]),e._v(" 中 "),t("code",[e._v("Docker")]),e._v(" 服务是默认随开机自启动的。")]),e._v(" "),t("p",[e._v("如在想要手动启动这一特性，可执行以下命令：")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" systemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("enable")]),e._v(" docker.service\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" systemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("enable")]),e._v(" containerd.service\n")])])]),t("p",[e._v("如想要关闭开机自启动，可执行以下命令。")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" systemctl disable docker.service\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" systemctl disable containerd.service\n")])])]),t("p",[e._v("更多的安装后可选操作可查看 "),t("a",{attrs:{href:"https://docs.docker.com/engine/install/linux-postinstall/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.docker.com/engine/install/linux-postinstall/"),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("h2",{attrs:{id:"设置国内镜像加速"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置国内镜像加速"}},[e._v("#")]),e._v(" 设置国内镜像加速")]),e._v(" "),t("p",[t("code",[e._v("Docker")]),e._v(" 默认从国外的 "),t("code",[e._v("Docker Hub")]),e._v(" 拉取镜像，因不可抵抗因素，这个过程会变得非常困难。所以可以将镜像源设置为国内的云服务商，来加速镜像拉取。可多设置几个，防止单个源宕机。")]),e._v(" "),t("p",[e._v("编辑 "),t("code",[e._v("/etc/docker/daemon.json")]),e._v(" 文件，如不存在则创建。在文件中添加如下内容：")]),e._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"registry-mirrors"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"https://hub-mirror.c.163.com"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"https://registry.docker-cn.com"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"https://mirror.baidubce.com"')]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("p",[e._v("保存修改之后，执行如下命令：")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("重载所有修改过的服务配置文件。")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" systemctl daemon-reload\n")])])])]),e._v(" "),t("li",[t("p",[e._v("重启 "),t("code",[e._v("Docker")]),e._v(" 服务。")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" systemctl restart "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v("\n")])])])])]),e._v(" "),t("p",[e._v("最后可执行 "),t("code",[e._v("docker info")]),e._v(",如输出中存在下方信息，则说明配置成功。")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v(" Registry Mirrors:\n  https://hub-mirror.c.163.com/\n  https://registry.docker-cn.com/\n  https://mirror.baidubce.com/\n")])])]),t("h2",{attrs:{id:"安装可视化管理工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装可视化管理工具"}},[e._v("#")]),e._v(" 安装可视化管理工具")]),e._v(" "),t("p",[e._v("为了更方便快捷、低成本地去管理我们的 "),t("code",[e._v("Docker")]),e._v("，我们可以使用安装使用 "),t("a",{attrs:{href:"https://github.com/portainer/portainer",target:"_blank",rel:"noopener noreferrer"}},[e._v("portainer"),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("p",[t("code",[e._v("portainer")]),e._v(" 是一个轻量级的 "),t("code",[e._v("Docker")]),e._v(" 可视化管理工具。有了它能够仅通过可视化的 "),t("code",[e._v("web")]),e._v(" 界面交互，轻松地对 "),t("code",[e._v("Docker")]),e._v(" 环境进行管理、维护，而无需执行各种 "),t("code",[e._v("Docker")]),e._v(" 命令。")]),e._v(" "),t("h3",{attrs:{id:"安装-portainer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-portainer"}},[e._v("#")]),e._v(" 安装 portainer")]),e._v(" "),t("p",[e._v("为了方便管理、部署，这里选用了 "),t("code",[e._v("Docker")]),e._v(" 的方式来进行安装。")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("首先创建一个卷用于 "),t("code",[e._v("portainer")]),e._v(" 的数据持久化。")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" volume create portainer_data\n")])])])]),e._v(" "),t("li",[t("p",[e._v("安装启动。")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-d")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-p")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("8000")]),e._v(":8000 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-p")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("9000")]),e._v(":9000 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("portainer "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--restart")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("always "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-v")]),e._v(" /var/run/docker.sock:/var/run/docker.sock "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-v")]),e._v(" portainer_data:/data portainer/portainer-ce\n")])])]),t("p",[t("code",[e._v("run")]),e._v(" 是将 "),t("code",[e._v("portainer")]),e._v(" 镜像生成容器（如镜像不存在会自动去远程下载），然后启动容器。")]),e._v(" "),t("p",[t("code",[e._v("-d")]),e._v(" 通过后台运行，两个 "),t("code",[e._v("-p")]),e._v(" 是将容器的 8000 和 9000 端口分别映射到主机的 8000 和 9000 端口，因为 "),t("code",[e._v("portainer")]),e._v(" 默认将其 "),t("code",[e._v("UI")]),e._v(" 服务暴露在 9000 端口，"),t("code",[e._v("TCP")]),e._v(" 通道暴露在 8000 端口，所以如果没有使用 "),t("code",[e._v("TCP")]),e._v(" 通道这特性可以不对 8000 端口进行映射。")]),e._v(" "),t("p",[t("code",[e._v("--restart=always")]),e._v(" 表示 "),t("code",[e._v("Docker")]),e._v(" 重启后，该容器也会随着重启。两个 "),t("code",[e._v("-v")]),e._v("，一个是用于与当前 "),t("code",[e._v("Docker")]),e._v(" 的守护进程通信，另一个是 "),t("code",[e._v("portainer")]),e._v(" 的数据持久化。")])])]),e._v(" "),t("h3",{attrs:{id:"访问、初始化配置-portainer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#访问、初始化配置-portainer"}},[e._v("#")]),e._v(" 访问、初始化配置 portainer")]),e._v(" "),t("p",[e._v("安装成功之后通过访问主机的 9000 端口即可访问 "),t("code",[e._v("portainer")]),e._v(" 的 "),t("code",[e._v("UI")]),e._v(" 界面。如主机 "),t("code",[e._v("ip")]),e._v(" 为 192.168.0.103，则通过浏览器访问 http://192.168.0.103:9000/ 。")]),e._v(" "),t("p",[e._v("初次打开需要进行基本配置，管理员账号密码设置以及需要管理的环境类型选择。至此 "),t("code",[e._v("portainer")]),e._v(" 的基本安装配置已经完成。")]),e._v(" "),t("p",[e._v("关于 portainer 的更多详情请查看 "),t("a",{attrs:{href:"https://documentation.portainer.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://documentation.portainer.io/"),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"https://docs.docker.com/engine/install/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.docker.com/engine/install/"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://docs.docker.com/engine/install/linux-postinstall/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.docker.com/engine/install/linux-postinstall/"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=s.exports}}]);