(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{383:function(a,s,t){"use strict";t.r(s);var e=t(11),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"docker-入门实践-2-更新应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-入门实践-2-更新应用"}},[a._v("#")]),a._v(" Docker 入门实践(2): 更新应用")]),a._v(" "),s("p",[a._v("随着新需求的到来，我们需要重新编码，然后更新应用。")]),a._v(" "),s("h2",{attrs:{id:"更新源码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新源码"}},[a._v("#")]),a._v(" 更新源码")]),a._v(" "),s("p",[a._v("假设需求需要在输出文本中换行补充 "),s("code",[a._v("Updated!!!")]),a._v(" 。那么如下修改 "),s("code",[a._v("index.js")]),a._v(" 源码。")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" Koa "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'koa'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" app "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Koa")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("ctx")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("body "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Hello Docker\\nUpdated!!!'")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("listen")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("h2",{attrs:{id:"更新镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新镜像"}},[a._v("#")]),a._v(" 更新镜像")]),a._v(" "),s("p",[a._v("修改了源码，自然需要更新由源码构建的镜像。我们进入项目根目录中执行下方命令，重新构建镜像。")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" build "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" hello-docker "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n")])])]),s("h2",{attrs:{id:"启动容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动容器"}},[a._v("#")]),a._v(" 启动容器")]),a._v(" "),s("p",[a._v("镜像更新成功之后，需要根据新镜像启动新的容器，执行下方命令。")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8000")]),a._v(":8000 hello-docker\n")])])]),s("p",[a._v("会看见如下错误信息")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("docker: Error response from daemon: driver failed programming external connectivity on endpoint priceless_jepsen "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("fdf5a00787d29dcddbfa7bcf85b0ac5ec8ed3d5253060053c421050c1f64c101"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(": Bind "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.0")]),a._v(".0.0:8000 failed: port is already allocated.\n")])])]),s("p",[a._v("是因为我们上次运行的 "),s("code",[a._v("hello-docker")]),a._v(" 容器还在运行中，占用着 8000 端口。所以我们应该替换旧的容器。")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("首先查看获取正在运行的 "),s("code",[a._v("hello-docker")]),a._v(" 容器的 "),s("code",[a._v("id")]),a._v("。")]),a._v(" "),s("p",[a._v("执行。")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v("\n")])])]),s("p",[a._v("或者。")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" container "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v("\n")])])]),s("p",[a._v("根据容器名称等信息获取对应的容器 "),s("code",[a._v("id")]),a._v("。")])]),a._v(" "),s("li",[s("p",[a._v("根据 "),s("code",[a._v("id")]),a._v(" 停止正在运行的容器。")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" stop "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("容器id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])])]),a._v(" "),s("li",[s("p",[a._v("一旦容器停止了，可以删了它。")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("容器id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("p",[s("code",[a._v("rm")]),a._v(" 默认不能移除正在运行的容器，但是加上 "),s("code",[a._v("-f")]),a._v(" 参数就可以。")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("容器id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])])]),a._v(" "),s("li",[s("p",[a._v("重启新容器。")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8000")]),a._v(":8000 hello-docker\n")])])])])]),a._v(" "),s("p",[a._v("重启成功之后，打开浏览器访问宿主机器的 8000 端口，可以看到新增的文本，说明应用更新成功。")]),a._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[a._v("#")]),a._v(" 参考")]),a._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://docs.docker.com/get-started/03_updating_app/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://docs.docker.com/get-started/03_updating_app/"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=r.exports}}]);