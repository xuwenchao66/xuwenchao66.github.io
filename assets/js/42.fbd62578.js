(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{466:function(e,o,r){"use strict";r.r(o);var a=r(31),t=Object(a.a)({},(function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"docker-入门实践-3-通过-docker-hub-共享应用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker-入门实践-3-通过-docker-hub-共享应用"}},[e._v("#")]),e._v(" Docker 入门实践(3): 通过 Docker Hub 共享应用")]),e._v(" "),r("p",[e._v("在本地开发完之后，应用要部署至服务器，通过前面的了解可知应用相当于一个镜像，所以需要想办法将镜像移动至服务端才能完成部署。")]),e._v(" "),r("p",[e._v("下面介绍如何将镜像推送至 "),r("a",{attrs:{href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Hub"),r("OutboundLink")],1),e._v("，以便在任何地方都能够快速获取镜像。")]),e._v(" "),r("p",[e._v("下方的 "),r("code",[e._v("xuwenchao66")]),e._v(" 字样为本人 "),r("code",[e._v("Docker Hub")]),e._v(" 的用户名，请替换为自己的。")]),e._v(" "),r("h2",{attrs:{id:"创建一个仓库"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#创建一个仓库"}},[e._v("#")]),e._v(" 创建一个仓库")]),e._v(" "),r("ol",[r("li",[e._v("登陆 "),r("a",{attrs:{href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Hub"),r("OutboundLink")],1),e._v("，如无账号先注册。")]),e._v(" "),r("li",[e._v("点击 "),r("code",[e._v("Create a Repository")]),e._v("，创建一个镜像仓库。")]),e._v(" "),r("li",[e._v("进入创建交互页面，输入仓库名。这里用 "),r("code",[e._v("hello-docker")]),e._v("，注意 "),r("code",[e._v("Visibility")]),e._v(" 选择的是默认的 "),r("code",[e._v("public")]),e._v("，这样所有人才可见。")]),e._v(" "),r("li",[e._v("点击下方 "),r("code",[e._v("create")]),e._v(" 按钮，然后可以看见成功创建了一个名为 "),r("code",[e._v("xuwenchao66/hello-docker")]),e._v(" 的仓库，这就是我们接下来要推送镜像的目标仓库。")])]),e._v(" "),r("h2",{attrs:{id:"本地登陆-docker-hub"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#本地登陆-docker-hub"}},[e._v("#")]),e._v(" 本地登陆 Docker Hub")]),e._v(" "),r("p",[e._v("在推送之前，必须在本地进行 "),r("code",[e._v("Docker Hub")]),e._v(" 的账户登陆。执行下方命令，根据提示输入密码，进行登陆。")]),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[e._v("docker login -u xuwenchao66\n")])])]),r("h2",{attrs:{id:"推送镜像"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#推送镜像"}},[e._v("#")]),e._v(" 推送镜像")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("在 "),r("code",[e._v("web")]),e._v(" 界面右方可看见 "),r("code",[e._v("docker push xuwenchao66/hello-docker:tagname")]),e._v(" 这样的命令，提示我们可通过该命令进行镜像推送。执行下方命令，这里忽略了 "),r("code",[e._v("tagname")]),e._v("（可忽略，默认为 "),r("code",[e._v("latest")]),e._v("）。")]),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[e._v("docker push xuwenchao66/hello-docker\n")])])]),r("p",[e._v("可发现控制台出现了如下提示 "),r("code",[e._v("An image does not exist locally with the tag: xuwenchao66/hello-docker")]),e._v("，告诉我们本地不存在标签为 "),r("code",[e._v("xuwenchao66/hello-docker")]),e._v(" 的镜像，所以无法进行推送。")])]),e._v(" "),r("li",[r("p",[e._v("使用 "),r("a",{attrs:{href:"https://docs.docker.com/engine/reference/commandline/tag/",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker tag"),r("OutboundLink")],1),e._v(" 以本地的 "),r("code",[e._v("hello-docker")]),e._v(" 镜像为参照创建一个不同名的叫做 "),r("code",[e._v("xuwenchao66/hello-docker")]),e._v(" 的镜像。")]),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[e._v("docker tag hello-docker xuwenchao66/hello-docker\n")])])]),r("p",[e._v("成功之后执行 "),r("code",[e._v("docker image ls")]),e._v("，可以看见多了一个镜像与原有的 "),r("code",[e._v("hello-docker")]),e._v(" 镜像 "),r("code",[e._v("id")]),e._v(" 一致，但是名字不同。")])]),e._v(" "),r("li",[r("p",[e._v("最后再次进行推送。")]),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[e._v("docker push xuwenchao66/hello-docker\n")])])]),r("p",[e._v("执行成功之后刷新目标仓库的 "),r("code",[e._v("web")]),e._v(" 界面，可以看见成功发布一个 "),r("code",[e._v("TAG")]),e._v(" 为 "),r("code",[e._v("latest")]),e._v(" 的镜像。")])])]),e._v(" "),r("h2",{attrs:{id:"参考"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),r("ol",[r("li",[r("a",{attrs:{href:"https://docs.docker.com/get-started/04_sharing_app/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.docker.com/get-started/04_sharing_app/"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);o.default=t.exports}}]);