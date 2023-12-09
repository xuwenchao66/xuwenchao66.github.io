(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{378:function(e,_,v){"use strict";v.r(_);var r=v(11),o=Object(r.a)({},(function(){var e=this,_=e._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"docker-简介"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#docker-简介"}},[e._v("#")]),e._v(" Docker 简介")]),e._v(" "),_("h2",{attrs:{id:"docker-是什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#docker-是什么"}},[e._v("#")]),e._v(" Docker 是什么")]),e._v(" "),_("p",[_("code",[e._v("Docker")]),e._v(" 是一个开放平台，能够用于开发、交付、运行应用。"),_("code",[e._v("Docker")]),e._v(" 能够将"),_("strong",[e._v("应用")]),e._v("与"),_("strong",[e._v("基础设施")]),e._v("（比如应用的运行环境、开发环境、环境配置等）解耦。")]),e._v(" "),_("p",[e._v("通过 "),_("code",[e._v("Docker")]),e._v(" 能够管理基础设施跟管理应用一样方便，无论是在开发、测试还是生产环境快速、一致地部署应用，减少从软件开发到交付的时间。")]),e._v(" "),_("p",[_("code",[e._v("Docker")]),e._v(" 能将应用打包、运行在一个"),_("strong",[e._v("独立")]),e._v("的环境，这个环境称为容器（"),_("code",[e._v("container")]),e._v("）。得益于"),_("strong",[e._v("独立")]),e._v("的这一特性，能够同时运行多个容器在一个主机上。")]),e._v(" "),_("p",[e._v("容器轻量且包含了运行应用所需要的所有依赖，所以通过 "),_("code",[e._v("Docker")]),e._v(" 运行应用，当前主机无需关心是否需要提前安装任何运行环境依赖，因为应用及其运行环境都可打包在容器之中。")]),e._v(" "),_("p",[e._v("所以通过共享容器，能确保在应用任何环境都有一致的运行效果。")]),e._v(" "),_("h2",{attrs:{id:"docker-系统架构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#docker-系统架构"}},[e._v("#")]),e._v(" Docker 系统架构")]),e._v(" "),_("p",[_("code",[e._v("Docker")]),e._v(" 使用 "),_("strong",[e._v("client-server")]),e._v(" 的架构，"),_("code",[e._v("Docker")]),e._v(" 客户端与 "),_("code",[e._v("Docker")]),e._v(" 后台程序（服务端）进行通讯，"),_("code",[e._v("Docker")]),e._v(" 后台程序负责构建、运行以及分配 "),_("code",[e._v("Docker")]),e._v(" 容器。\n"),_("code",[e._v("Docker")]),e._v(" 客户端以及 "),_("code",[e._v("Docker")]),e._v(" 后台程序可以运行在同一系统中，"),_("code",[e._v("Docker")]),e._v(" 客户端也可以连接远程的 "),_("code",[e._v("Docker")]),e._v(" 后台程序，二者通过 "),_("code",[e._v("REST API")]),e._v(" 通讯。")]),e._v(" "),_("p",[_("code",[e._v("Docker")]),e._v(" 是使用 "),_("code",[e._v("Go")]),e._v(" 语言来编写，利用 "),_("code",[e._v("Linux")]),e._v(" 内核的一些特性来完成其功能。Docker 使用 "),_("code",[e._v("Linux")]),e._v(" 的 "),_("code",[e._v("namespaces")]),e._v(" 来为容器提供独立的工作环境，当运行容器的时候，"),_("code",[e._v("Docker")]),e._v(" 为容器创建了对应的 "),_("code",[e._v("namespaces")]),e._v(" 集合。")]),e._v(" "),_("p",[_("code",[e._v("namespaces")]),e._v(" 是 "),_("code",[e._v("Linux")]),e._v(" 内核用来实现资源隔离的方式，不同的 "),_("code",[e._v("namespaces")]),e._v(" 进程拥有独立、互不干扰的系统资源。")]),e._v(" "),_("p",[_("img",{attrs:{src:"https://docs.docker.com/engine/images/architecture.svg",alt:"docker-architecture"}})]),e._v(" "),_("h2",{attrs:{id:"docker-基本概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#docker-基本概念"}},[e._v("#")]),e._v(" Docker 基本概念")]),e._v(" "),_("h3",{attrs:{id:"docker-daemon-后台程序"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#docker-daemon-后台程序"}},[e._v("#")]),e._v(" Docker daemon（后台程序）")]),e._v(" "),_("p",[_("code",[e._v("Docker daemon（dockerd）")]),e._v(" 监听着 "),_("code",[e._v("Docker API")]),e._v(" 请求，以及管理 "),_("code",[e._v("Docker")]),e._v(" 相关组件比如 "),_("code",[e._v("images")]),e._v("（镜像）、"),_("code",[e._v("containers")]),e._v("（容器）、"),_("code",[e._v("networks")]),e._v("（网络）、"),_("code",[e._v("volumes")]),e._v("（卷）等等。一个后台程序还能与其他后台程序通讯，来管理 "),_("code",[e._v("Docker")]),e._v(" 服务。")]),e._v(" "),_("h3",{attrs:{id:"docker-client-客户端"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#docker-client-客户端"}},[e._v("#")]),e._v(" Docker client（客户端）")]),e._v(" "),_("p",[_("code",[e._v("Docker client (docker)")]),e._v(" 是用户与 "),_("code",[e._v("Docker")]),e._v(" 进行交互的主要方式。当你执行命令，比如执行 "),_("code",[e._v("docker run")]),e._v(" 的时候，客户端将命令发送给的 "),_("code",[e._v("daemon")]),e._v("（后台程序），然后由后台程序执行。执行的命令其实就是调用 "),_("code",[e._v("Docker API")]),e._v("，所以一个 "),_("code",[e._v("Docker")]),e._v(" 客户端能够与多个后台程序通讯。")]),e._v(" "),_("h3",{attrs:{id:"image-镜像"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#image-镜像"}},[e._v("#")]),e._v(" Image（镜像）")]),e._v(" "),_("p",[e._v("镜像是一个只读模板，用于说明该如何创建一个 "),_("code",[e._v("Docker")]),e._v(" 容器。通常一个镜像会基于另一个镜像，以及一些额外的定制化。比如，我们需要一个能够构建、运行前端应用的容器，那么就需要一个基础镜像，该镜像基于 "),_("code",[e._v("Node.js")]),e._v(" 镜像，以及需要安装了诸如 "),_("code",[e._v("nginx")]),e._v(" 的 "),_("code",[e._v("web server")]),e._v("，还有一些基础配置，确保我们能在该镜像所创建的容器中构建、运行我们的应用。")]),e._v(" "),_("p",[e._v("你可以使用自定义镜像，也可以使用别人已经创建、发布在公共镜像仓库的镜像。你可以通过 "),_("code",[e._v("Dockerfile")]),e._v(" 文件来创建一个镜像，"),_("code",[e._v("Dockerfile")]),e._v(" 通过简单的语法说明、定义了创建、运行一个镜像所需步骤。"),_("code",[e._v("Dockerfile")]),e._v(" 中的每个说明都在 "),_("code",[e._v("image")]),e._v(" 上创建一个 "),_("code",[e._v("layer")]),e._v("，当修改 "),_("code",[e._v("Dockerfile")]),e._v(" 以及重新构建 "),_("code",[e._v("image")]),e._v(" 的时候，只有修改了的 "),_("code",[e._v("layer")]),e._v(" 才需要重新构建。这也是为什么 "),_("code",[e._v("Docker")]),e._v(" 比起传统虚拟技术要更加轻量、快速。")]),e._v(" "),_("h3",{attrs:{id:"container-容器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#container-容器"}},[e._v("#")]),e._v(" Container（容器）")]),e._v(" "),_("p",[e._v("容器是一个可运行的镜像实例，你能够通过 "),_("code",[e._v("Docker API")]),e._v(" 或命令行来对容器进行创建、启动、停止、删除等操作。一个容器能够连接多个 "),_("code",[e._v("networks")]),e._v("，关联存储，甚至可以根据当前容器的状态创建一个新的镜像。")]),e._v(" "),_("p",[e._v("容器默认与其他容器，以及宿主机器是相对隔离的。当然这个“隔离”的程度也是可控、可自定义的。")]),e._v(" "),_("p",[e._v("容器由镜像以及当我们启动、创建容器的参数来定义。当一个容器被删除时，默认在运行期间的状态改变以及产生的持久存储都会被清除、重置。")]),e._v(" "),_("h3",{attrs:{id:"docker-registries-镜像仓库"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#docker-registries-镜像仓库"}},[e._v("#")]),e._v(" Docker registries（镜像仓库）")]),e._v(" "),_("p",[_("code",[e._v("Docker registries")]),e._v(" 用于存储 "),_("code",[e._v("Docker")]),e._v(" 镜像，"),_("a",{attrs:{href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Hub"),_("OutboundLink")],1),e._v(" 就是官方的一个公共镜像仓库，"),_("code",[e._v("registry")]),e._v(" 是可配置的，我们可以配置为国内仓库，甚至私有的仓库。")]),e._v(" "),_("p",[e._v("当我们执行 "),_("code",[e._v("docker pull")]),e._v(" 或 "),_("code",[e._v("docker run")]),e._v("，如本地不存在所需镜像，"),_("code",[e._v("Docker")]),e._v(" 会去配置中的 "),_("code",[e._v("registry")]),e._v(" 拉取目标镜像。当执行 "),_("code",[e._v("docker push")]),e._v(" 的时候会将镜像发布至配置好的 "),_("code",[e._v("registry")]),e._v(" 中。")]),e._v(" "),_("h2",{attrs:{id:"docker-可以用来做什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#docker-可以用来做什么"}},[e._v("#")]),e._v(" Docker 可以用来做什么？")]),e._v(" "),_("h3",{attrs:{id:"_1-快速、一致的交付应用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-快速、一致的交付应用"}},[e._v("#")]),e._v(" 1. 快速、一致的交付应用")]),e._v(" "),_("p",[_("code",[e._v("Docker")]),e._v(" 能够让整个软件开发生命周期如流水线般更高效地进行，让开发者始终在一个标准、一致的环境中进行工作。容器非常适用持续集成、持续交付的工作流。")]),e._v(" "),_("p",[e._v("考虑如下应用场景：")]),e._v(" "),_("ul",[_("li",[e._v("在开发初期，本地环境写代码，让应用运行在本地的 "),_("code",[e._v("Docker")]),e._v("，与同事之间的工作共享也是通过 "),_("code",[e._v("Docker")]),e._v(" 容器。")]),e._v(" "),_("li",[e._v("本地开发完成之后，通过 "),_("code",[e._v("Docker")]),e._v(" 将应用推送、部署在测试环境，供相关人员进行验收测试。")]),e._v(" "),_("li",[e._v("当发现 "),_("code",[e._v("bug")]),e._v(" 的时候，开发人员在本地修复 "),_("code",[e._v("bug")]),e._v(" 之后，将改动再次推送、部署到测试环境供相关人员进行 "),_("code",[e._v("bug")]),e._v(" 修复验证。")]),e._v(" "),_("li",[e._v("当测试验收通过之后，只需要将整个流程中更新后的镜像推送、部署至生产环境即可。")])]),e._v(" "),_("p",[e._v("因为整个流程中应用的运行环境都是一致的，所以再也不会出现“我本地是没问题的啊”这类的问题了，而且也免去了在各个环境中安装应用运行环境（比如 "),_("code",[e._v("Node.js")]),e._v("）这一重复工作，提高了软件的交付效率。")]),e._v(" "),_("h3",{attrs:{id:"_2-快速、弹性部署"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-快速、弹性部署"}},[e._v("#")]),e._v(" 2. 快速、弹性部署")]),e._v(" "),_("p",[_("code",[e._v("Docker")]),e._v(" 的“容器”这一特性，让其十分便携。容器能够运行在任何环境，比如个人电脑、物理或虚拟主机。"),_("code",[e._v("Docker")]),e._v(" 的便携、轻量，快捷迁移，让动态扩容、缩容变得更加简单。")]),e._v(" "),_("h3",{attrs:{id:"_3-在同一硬件资源中进行更多的工作-更高效的利用硬件资源"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-在同一硬件资源中进行更多的工作-更高效的利用硬件资源"}},[e._v("#")]),e._v(" 3. 在同一硬件资源中进行更多的工作，更高效的利用硬件资源")]),e._v(" "),_("p",[e._v("因为 "),_("code",[e._v("Docker")]),e._v(" 的独立特性是通过 "),_("code",[e._v("Linux")]),e._v(" 内核的 "),_("code",[e._v("namespaces")]),e._v(" 来实现的，所以容器的应用进程其实还是运行在宿主内核中，容器中只包含了必要的运行依赖，而不是像传统虚拟机一样需要先模拟一套完整的操作系统。\n所以 "),_("code",[e._v("Docker")]),e._v(" 能够同时保证容器独立、以及启动运行效率，一个主机上可以稳定运行多个容器，从而更高效地利用硬件资源。")]),e._v(" "),_("h2",{attrs:{id:"参考"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),_("ol",[_("li",[_("a",{attrs:{href:"https://docs.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.docker.com/"),_("OutboundLink")],1)]),e._v(" "),_("li",[_("a",{attrs:{href:"https://docs.docker.com/get-started/overview/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.docker.com/get-started/overview/"),_("OutboundLink")],1)]),e._v(" "),_("li",[_("a",{attrs:{href:"https://vuepress.mirror.docker-practice.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker — 从入门到实践"),_("OutboundLink")],1)]),e._v(" "),_("li",[_("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2018/02/docker-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker 入门教程"),_("OutboundLink")],1)])])])}),[],!1,null,null,null);_.default=o.exports}}]);