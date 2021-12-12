(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{464:function(e,t,s){"use strict";s.r(t);var a=s(31),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"docker-入门实践-1-使用自定义镜像-部署自己的应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-入门实践-1-使用自定义镜像-部署自己的应用"}},[e._v("#")]),e._v(" Docker 入门实践(1): 使用自定义镜像，部署自己的应用")]),e._v(" "),s("p",[e._v("在工作、学习中社区的镜像往往不能够满足需求，为此我们会使用自定义镜像。")]),e._v(" "),s("p",[e._v("我们通常会使用 "),s("code",[e._v("Dockerfile")]),e._v(" 文件来制作镜像，"),s("code",[e._v("Dockerfile")]),e._v(" 是一个文本文件，用来定义该如何创建、运行一个镜像。")]),e._v(" "),s("p",[e._v("下面将介绍如何构建自定义镜像，以及将其运行在 "),s("code",[e._v("Docker")]),e._v(" 之中。")]),e._v(" "),s("h2",{attrs:{id:"实现一个简单的-node-js-应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现一个简单的-node-js-应用"}},[e._v("#")]),e._v(" 实现一个简单的 Node.js 应用")]),e._v(" "),s("p",[e._v("首先执行 "),s("code",[e._v("npm init")]),e._v(" 初始化一个项目，该项目是一个 "),s("code",[e._v("Node.js")]),e._v(" 应用，其根入口文件 "),s("code",[e._v("index.js")]),e._v(" 代码如下。")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" Koa "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'koa'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" app "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Koa")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("ctx")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("body "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Hello Docker'")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("listen")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("8000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),s("p",[e._v("当运行该脚本的时候，通过浏览器访问部署机器的 8000 端口，浏览器会返回、渲染 "),s("code",[e._v("Hello Docker")]),e._v(" 文本。")]),e._v(" "),s("h2",{attrs:{id:"编写-dockerfile-文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编写-dockerfile-文件"}},[e._v("#")]),e._v(" 编写 Dockerfile 文件")]),e._v(" "),s("p",[e._v("在项目根目录创建一个 "),s("code",[e._v("Dockerfile")]),e._v(" 文件，其内容如下。")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("FROM node:latest\nCOPY "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v(" /app\nWORKDIR /app\nRUN "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" i\nCMD "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"node"')]),e._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"index.js"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])]),s("ul",[s("li",[s("code",[e._v("FROM node:latest")]),e._v("，该镜像基于 "),s("code",[e._v("Node.js")]),e._v(" 镜像，冒号后面的是镜像的版本号，这里表示镜像基于最新的 "),s("code",[e._v("Node.js")]),e._v(" 镜像。")]),e._v(" "),s("li",[s("code",[e._v("COPY . /app")]),e._v("，将当前根目录的所有文件（除开被 "),s("code",[e._v(".dockerignore")]),e._v(" 忽略的文件），都复制到镜像的 "),s("code",[e._v("/app")]),e._v(" 目录中。")]),e._v(" "),s("li",[s("code",[e._v("WORKDIR /app")]),e._v("，工作目录为 "),s("code",[e._v("/app")]),e._v(" ,也就是说镜像、容器默认都是在 "),s("code",[e._v("/app")]),e._v(" 目录下执行命令的。")]),e._v(" "),s("li",[s("code",[e._v("RUN npm i")]),e._v("，"),s("code",[e._v("RUN")]),e._v(" 用于构建镜像时执行命令，这里执行 "),s("code",[e._v("npm i")]),e._v(" 来安装依赖。")]),e._v(" "),s("li",[s("code",[e._v('CMD ["node", "index.js"]')]),e._v("，"),s("code",[e._v("CMD")]),e._v(" 为容器启动时执行的命令，这里启动了一个 "),s("code",[e._v("Node.js")]),e._v(" 服务。")])]),e._v(" "),s("p",[s("code",[e._v("RUN")]),e._v(" 和 "),s("code",[e._v("CMD")]),e._v(" 都是用来执行命令，相似但有以下不同。")]),e._v(" "),s("ol",[s("li",[s("code",[e._v("RUN")]),e._v(" 是在构建镜像阶段执行，执行后的产物都会打包进构建出来的 "),s("code",[e._v("image")]),e._v(" 中，所以一般用于应用环境依赖的安装，而 "),s("code",[e._v("CMD")]),e._v(" 是在容器启动的时候执行。")]),e._v(" "),s("li",[e._v("一个 "),s("code",[e._v("Dockerfile")]),e._v(" 中能够有个 "),s("code",[e._v("RUN")]),e._v(" 指令，而 "),s("code",[e._v("CMD")]),e._v(" 只能有一个。")])]),e._v(" "),s("h2",{attrs:{id:"构建镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构建镜像"}},[e._v("#")]),e._v(" 构建镜像")]),e._v(" "),s("p",[e._v("有了 "),s("code",[e._v("Dockerfile")]),e._v(" 之后，我们可以根据 "),s("code",[e._v("Dockerfile")]),e._v(" 构建镜像，执行以下命令。")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("docker build -t hello-docker "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n")])])]),s("ul",[s("li",[s("code",[e._v("build")]),e._v("，构建镜像。")]),e._v(" "),s("li",[s("code",[e._v("-t")]),e._v("，镜像的名称，这里是 "),s("code",[e._v("hello-docker")]),e._v("。")]),e._v(" "),s("li",[s("code",[e._v(".")]),e._v("，命令的最后，用于告诉 "),s("code",[e._v("Docker")]),e._v(" 应该在哪查找 "),s("code",[e._v("Dockerfile")]),e._v(" 文件，这里用的是当前项目根目录。")])]),e._v(" "),s("p",[e._v("构建成功之后，执行 "),s("code",[e._v("docker image ls")]),e._v("，可以看到一个名为 "),s("code",[e._v("hello-docker")]),e._v(" 的镜像文件。")]),e._v(" "),s("h2",{attrs:{id:"生成、运行容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成、运行容器"}},[e._v("#")]),e._v(" 生成、运行容器")]),e._v(" "),s("p",[e._v("执行下方命令，以 "),s("code",[e._v("hello-docker")]),e._v(" 镜像生成、运行一个容器实例。")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("docker run -d -p "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("8000")]),e._v(":8000 hello-docker\n")])])]),s("ul",[s("li",[s("code",[e._v("-d")]),e._v("，后台执行。")]),e._v(" "),s("li",[s("code",[e._v("-p 8000:8000")]),e._v("，宿主机器的 8000 端口映射至容器的 8000 端口。")])]),e._v(" "),s("p",[e._v("启动成功之后，执行 "),s("code",[e._v("docker container ls")]),e._v(" 可以看见多出了一个 "),s("code",[e._v("status")]),e._v(" 为 "),s("code",[e._v("up")]),e._v(" 的容器。我们访问宿主机器的 8000 端口，比如 http://192.168.0.103:8000/ ，此时可看见浏览器返回了 "),s("code",[e._v("Hello Docker")]),e._v(" 文本，至此我们的自定义镜像、容器已经成功部署运行。")]),e._v(" "),s("p",[e._v("本文 "),s("code",[e._v("demo")]),e._v(" 源码可从 "),s("a",{attrs:{href:"https://github.com/xuwenchao66/docker-demos",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/xuwenchao66/docker-demos"),s("OutboundLink")],1),e._v("中查看、获取。")]),e._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://docs.docker.com/get-started/02_our_app/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.docker.com/get-started/02_our_app/"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2018/02/docker-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker 入门教程"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=o.exports}}]);