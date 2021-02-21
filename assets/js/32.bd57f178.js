(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{268:function(a,e,t){"use strict";t.r(e);var s=t(0),r=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"docker-入门实践"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-入门实践","aria-hidden":"true"}},[a._v("#")]),a._v(" Docker 入门实践")]),a._v(" "),t("p",[a._v("在简单了解 Docker 之后，跟学习任何语言一样，都必须先来一个 Hello world 进一步加深、巩固自己的理解。")]),a._v(" "),t("h2",{attrs:{id:"使用公共镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用公共镜像","aria-hidden":"true"}},[a._v("#")]),a._v(" 使用公共镜像")]),a._v(" "),t("h3",{attrs:{id:"获取镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取镜像","aria-hidden":"true"}},[a._v("#")]),a._v(" 获取镜像")]),a._v(" "),t("p",[a._v("镜像的存在是启动容器的前提，所以我们先要获取一个镜像，为此执行如下命令。")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("docker image pull docker/getting-started\n")])])]),t("p",[a._v("成功之后执行 "),t("code",[a._v("docker images")]),a._v(" 查看当前镜像，可以发现多了一个叫做 docker/getting-started 的镜像。")]),a._v(" "),t("h3",{attrs:{id:"运行容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行容器","aria-hidden":"true"}},[a._v("#")]),a._v(" 运行容器")]),a._v(" "),t("p",[a._v("执行 run 命令，启动 getting-started 镜像，生成一个容器。")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("docker run -d -p "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v(":80 docker/getting-started\n")])])]),t("ul",[t("li",[t("code",[a._v("-d")]),a._v(" 让容器在后台运行。")]),a._v(" "),t("li",[t("code",[a._v("-p 10086:80")]),a._v(" 让宿主机器的 10086 端口映射至容器的 80 端口。")]),a._v(" "),t("li",[t("code",[a._v("docker/getting-started")]),a._v(" 需要使用的镜像名，如该镜像在本地中不存在则会自动从远程镜像仓库中获取，所以"),t("code",[a._v("image pull")]),a._v("操作是可省略的。")])]),a._v(" "),t("p",[a._v("执行过后，继续执行"),t("code",[a._v("docker container ls")]),a._v("查看当前容器信息、状态，可以发现多了一个 status 为 up（启动）状态的容器，说明容器启动成功了。")]),a._v(" "),t("p",[a._v("因为 docker/getting-started 默认在容器中暴露了 80 供以访问，而且我们对其进行了端口映射， 所以我们通过宿主机器的 ip 加上映射的端口号，比如在浏览器中访问 http://192.168.0.103:10086/ ，就可以看到由 docker/getting-started 容器提供的一个 web 页面。")]),a._v(" "),t("h2",{attrs:{id:"使用自定义镜像，部署自己的应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用自定义镜像，部署自己的应用","aria-hidden":"true"}},[a._v("#")]),a._v(" 使用自定义镜像，部署自己的应用")]),a._v(" "),t("p",[a._v("在工作、学习中社区的镜像往往不能够满足需求，为此我们会使用自定义镜像。")]),a._v(" "),t("p",[a._v("我们通常会使用 Dockerfile 文件来制作镜像，Dockerfile 是一个文本文件，用来定义该如何创建、运行一个镜像。")]),a._v(" "),t("p",[a._v("下面将介绍如何构建自定义镜像，以及将其运行在 Docker 之中。")]),a._v(" "),t("p",[a._v("下方 demo 源码可从"),t("a",{attrs:{href:"https://github.com/xu-wen-chao/docker-demos",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/xu-wen-chao/docker-demos"),t("OutboundLink")],1),a._v("中查看、获取。")]),a._v(" "),t("h3",{attrs:{id:"实现一个简单的-nodejs-应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现一个简单的-nodejs-应用","aria-hidden":"true"}},[a._v("#")]),a._v(" 实现一个简单的 nodejs 应用")]),a._v(" "),t("p",[a._v("首先执行 "),t("code",[a._v("npm init")]),a._v(" 初始化一个项目，该项目是一个 nodejs 应用，其根入口文件 index.js 代码如下。")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" Koa "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'koa'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" app "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Koa")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\napp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("use")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("ctx")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  ctx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("body "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Hello Docker'")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\napp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("listen")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("p",[a._v("当运行该脚本的时候，通过浏览器访问部署机器的 8000 端口，浏览器会返回、渲染 Hello Docker 文本。")]),a._v(" "),t("h3",{attrs:{id:"编写-dockerfile-文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编写-dockerfile-文件","aria-hidden":"true"}},[a._v("#")]),a._v(" 编写 Dockerfile 文件")]),a._v(" "),t("p",[a._v("在项目根目录创建一个 Dockerfile 文件，其内容如下。")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("FROM node:latest\nCOPY "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v(" /app\nWORKDIR /app\nRUN "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" i\nCMD "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"node"')]),a._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"index.js"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),t("ul",[t("li",[t("code",[a._v("FROM node:latest")]),a._v("，该镜像基于 node 镜像，冒号后面的是镜像的版本号，这里表示镜像基于最新的 node 镜像。")]),a._v(" "),t("li",[t("code",[a._v("COPY . /app")]),a._v("，将当前根目录的所有文件（除开被.dockerignore 忽略的文件），都复制到镜像的 /app 目录中。")]),a._v(" "),t("li",[t("code",[a._v("WORKDIR /app")]),a._v("，工作目录为 /app ,也就是说镜像、容器默认都是在 /app 目录下执行命令的。")]),a._v(" "),t("li",[t("code",[a._v("RUN npm i")]),a._v("，RUN 用于构建镜像时执行命令，这里执行"),t("code",[a._v("npm i")]),a._v("来安装依赖。")]),a._v(" "),t("li",[t("code",[a._v('CMD ["node", "index.js"]')]),a._v("，CMD 为容器启动时执行的命令，这里启动了一个 nodejs 服务。")])]),a._v(" "),t("p",[a._v("RUN 和 CMD 都是用来执行命令，相似但有以下不同。")]),a._v(" "),t("ol",[t("li",[a._v("RUN 是在构建镜像阶段执行，执行后的产物都会打包进构建出来的 image 中，所以一般用于应用环境依赖的安装，而 CMD 是在容器启动的时候执行。")]),a._v(" "),t("li",[a._v("一个 Dockerfile 中能够有个 RUN 指令，而 CMD 只能有一个。")])]),a._v(" "),t("h3",{attrs:{id:"构建镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构建镜像","aria-hidden":"true"}},[a._v("#")]),a._v(" 构建镜像")]),a._v(" "),t("p",[a._v("有了 Dockerfile 之后，我们可以根据 Dockerfile 构建镜像，执行以下命令。")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("docker build -t hello-docker "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n")])])]),t("ul",[t("li",[t("code",[a._v("build")]),a._v("，构建镜像。")]),a._v(" "),t("li",[t("code",[a._v("-t")]),a._v("，镜像的名称，这里是 hello-docker。")]),a._v(" "),t("li",[t("code",[a._v(".")]),a._v("，命令的最后，用于告诉 Docker 应该在哪查找 Dockerfile 文件，这里用的是当前项目根目录。")])]),a._v(" "),t("p",[a._v("构建成功之后，执行"),t("code",[a._v("docker image ls")]),a._v("，可以看到一个名为 hello-docker 的镜像文件。")]),a._v(" "),t("h3",{attrs:{id:"生成、运行容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成、运行容器","aria-hidden":"true"}},[a._v("#")]),a._v(" 生成、运行容器")]),a._v(" "),t("p",[a._v("执行下方命令，以 hello-docker 镜像生成、运行一个容器实例。")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("docker run -d -p "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8000")]),a._v(":8000 hello-docker\n")])])]),t("ul",[t("li",[t("code",[a._v("-d")]),a._v("，后台执行。")]),a._v(" "),t("li",[t("code",[a._v("-p 8000:8000")]),a._v("，宿主机器的 8000 端口映射至容器的 8000 端口。")])]),a._v(" "),t("p",[a._v("启动成功之后，执行"),t("code",[a._v("docker container ls")]),a._v("可以看见多出了一个 status 为 up 的容器。我们访问宿主机器的 8000 端口，比如 http://192.168.0.103:8000/ ，此时可看见浏览器返回了 Hello Docker 文本，至此我们的自定义镜像、容器已经成功部署运行。")]),a._v(" "),t("h2",{attrs:{id:"更新应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新应用","aria-hidden":"true"}},[a._v("#")]),a._v(" 更新应用")]),a._v(" "),t("p",[a._v("随着新需求的到来，我们需要更新应用。")]),a._v(" "),t("h3",{attrs:{id:"更新源码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新源码","aria-hidden":"true"}},[a._v("#")]),a._v(" 更新源码")]),a._v(" "),t("p",[a._v("假设需求需要在输出文本中换行补充 Updated!!! 。那么如下修改 index.js 源码。")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" Koa "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'koa'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" app "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Koa")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\napp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("use")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("ctx")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  ctx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("body "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Hello Docker\\nUpdated!!!'")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\napp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("listen")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("h3",{attrs:{id:"更新镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新镜像","aria-hidden":"true"}},[a._v("#")]),a._v(" 更新镜像")]),a._v(" "),t("p",[a._v("修改了源码，自然需要更新由源码构建的镜像。我们进入项目根目录中执行下方命令，重新构建镜像。")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("docker build -t hello-docker "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n")])])]),t("h3",{attrs:{id:"启动容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动容器","aria-hidden":"true"}},[a._v("#")]),a._v(" 启动容器")]),a._v(" "),t("p",[a._v("镜像更新成功之后，需要根据新镜像启动新的容器，执行下方命令。")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("docker run -d -p "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8000")]),a._v(":8000 hello-docker\n")])])]),t("p",[a._v("会看见如下错误信息")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("docker: Error response from daemon: driver failed programming external connectivity on endpoint priceless_jepsen "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("fdf5a00787d29dcddbfa7bcf85b0ac5ec8ed3d5253060053c421050c1f64c101"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(": Bind "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.0")]),a._v(".0.0:8000 failed: port is already allocated.\n")])])]),t("p",[a._v("是因为我们上次运行的 hello-docker 容器还在运行中，占用着 8000 端口。所以我们应该替换旧的容器。")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("首先查看获取正在运行的 hello-docker 容器的 id。")]),a._v(" "),t("p",[a._v("执行。")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("docker "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v("\n")])])]),t("p",[a._v("或者。")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("docker container "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v("\n")])])])]),a._v(" "),t("li",[t("p",[a._v("根据 id 停止正在运行的容器。")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("docker stop "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("容器id"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])])]),a._v(" "),t("li",[t("p",[a._v("一旦容器停止了，可以删了它。")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("docker "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("容器id"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("p",[t("code",[a._v("rm")]),a._v(" 默认不能移除正在运行的容器，但是加上 "),t("code",[a._v("-f")]),a._v(" 参数就可以。")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("docker "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -f "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("容器id"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])])]),a._v(" "),t("li",[t("p",[a._v("重启新容器。")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("docker run -d -p "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8000")]),a._v(":8000 hello-docker\n")])])])])]),a._v(" "),t("p",[a._v("重启成功之后，打开浏览器访问宿主机器的 8000 端口，可以看到新增的文本，说明应用更新成功。")]),a._v(" "),t("h2",{attrs:{id:"通过-docker-hub-共享应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通过-docker-hub-共享应用","aria-hidden":"true"}},[a._v("#")]),a._v(" 通过 Docker Hub 共享应用")]),a._v(" "),t("p",[a._v("在本地开发完之后，应用要部署至服务器，通过前面的了解可知应用相当于一个镜像，所以需要共享镜像。下面介绍如何将镜像推送至"),t("a",{attrs:{href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Docker Hub"),t("OutboundLink")],1),a._v("，以便在任何地方都能够快速获取镜像。")]),a._v(" "),t("p",[a._v("下方的 xuwenchao66 字样为 Docker Hub 的用户名，请替换为自己的。")]),a._v(" "),t("h3",{attrs:{id:"创建一个仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建一个仓库","aria-hidden":"true"}},[a._v("#")]),a._v(" 创建一个仓库")]),a._v(" "),t("ol",[t("li",[a._v("登陆"),t("a",{attrs:{href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Docker Hub"),t("OutboundLink")],1),a._v("，如无账号先注册。")]),a._v(" "),t("li",[a._v("点击 Create a Repository，创建一个镜像仓库。")]),a._v(" "),t("li",[a._v("进入创建交互页面，输入仓库名。这里用 hello-docker，注意 Visibility 选择的是默认的 public，这样所有人才可见。")]),a._v(" "),t("li",[a._v("点击下方 create 按钮，然后可以看见成功创建了一个名为 xuwenchao66/hello-docker 的仓库，这就是我们接下来要推送镜像的目标仓库。")])]),a._v(" "),t("h3",{attrs:{id:"本地登陆-docker-hub"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本地登陆-docker-hub","aria-hidden":"true"}},[a._v("#")]),a._v(" 本地登陆 Docker Hub")]),a._v(" "),t("p",[a._v("在推送之前，必须在本地进行 Docker Hub 的账户登陆。执行下方命令，根据提示输入密码，进行登陆。")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("docker login -u xuwenchao66\n")])])]),t("h3",{attrs:{id:"推送镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#推送镜像","aria-hidden":"true"}},[a._v("#")]),a._v(" 推送镜像")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("在创建成功后，在 web 界面右方可看见"),t("code",[a._v("docker push xuwenchao66/hello-docker:tagname")]),a._v("这样的命令，提示我们可通过该命令进行镜像推送。执行下方命令，这里忽略了 tagname（可忽略，默认为 latest）。")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("docker push xuwenchao66/hello-docker\n")])])]),t("p",[a._v("可发现控制台出现了如下提示"),t("code",[a._v("An image does not exist locally with the tag: xuwenchao66/hello-docker")]),a._v("，告诉我们本地不存在名为 xuwenchao66/hello-docker 的镜像，所以无法进行推送。")])]),a._v(" "),t("li",[t("p",[a._v("使用"),t("a",{attrs:{href:"https://docs.docker.com/engine/reference/commandline/tag/",target:"_blank",rel:"noopener noreferrer"}},[a._v("docker tag"),t("OutboundLink")],1),a._v("以本地的 hello-docker 镜像为参照创建一个不同名的叫做 xuwenchao66/hello-docker 的镜像。")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("docker tag hello-docker xuwenchao66/hello-docker\n")])])]),t("p",[a._v("成功之后执行"),t("code",[a._v("docker image ls")]),a._v("，可以看见多了一个镜像与原有的 hello-docker 镜像 id 一致，但是名字不同。")])]),a._v(" "),t("li",[t("p",[a._v("最后再次进行推送。")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("docker push xuwenchao66/hello-docker\n")])])]),t("p",[a._v("执行成功之后刷新目标仓库的 web 界面，可以看见成功发布一个 TAG 为 latest 的镜像。")])])]),a._v(" "),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[a._v("#")]),a._v(" 参考")]),a._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"https://docs.docker.com/get-started/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://docs.docker.com/get-started/"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2018/02/docker-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Docker 入门教程"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=r.exports}}]);