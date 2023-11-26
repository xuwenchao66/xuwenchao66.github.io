(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{382:function(e,r,a){"use strict";a.r(r);var t=a(10),o=Object(t.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"docker-入门实践-4-不通过-registry-共享镜像"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker-入门实践-4-不通过-registry-共享镜像"}},[e._v("#")]),e._v(" Docker 入门实践(4): 不通过 registry 共享镜像")]),e._v(" "),r("p",[e._v("有些时候我们希望不通过 "),r("code",[e._v("Docker hub")]),e._v(" 或者私有的 "),r("code",[e._v("registry")]),e._v(" 就能共享、传输镜像。比如在内部测试的时候，希望能够通过 "),r("code",[e._v("ftp")]),e._v("、"),r("code",[e._v("scp")]),e._v(" 等简单的文件传输即可完成镜像的共享。")]),e._v(" "),r("p",[e._v("下面将介绍如何将镜像文件打包成 "),r("code",[e._v("tar")]),e._v(" 压缩文件，以及如何将该 "),r("code",[e._v("tar")]),e._v(" 文件加载为镜像。")]),e._v(" "),r("h2",{attrs:{id:"使用-docker-save-docker-load"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用-docker-save-docker-load"}},[e._v("#")]),e._v(" 使用 docker save & docker load")]),e._v(" "),r("h3",{attrs:{id:"使用-docker-save-将镜像输出为归档文件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用-docker-save-将镜像输出为归档文件"}},[e._v("#")]),e._v(" 使用 docker save 将镜像输出为归档文件")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://docs.docker.com/engine/reference/commandline/save/",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker save"),r("OutboundLink")],1),e._v(" 可用于保存一个或多个"),r("strong",[e._v("镜像")]),e._v("为归档文件，默认使用的是标准输出流。该归档文件同时保存了镜像的 "),r("code",[e._v("layers")]),e._v("、"),r("code",[e._v("tags")]),e._v("、"),r("code",[e._v("versions")]),e._v(" 等。")]),e._v(" "),r("p",[e._v("使用方法如 "),r("code",[e._v("docker save [OPTIONS] IMAGE [IMAGE...]")]),e._v("。")]),e._v(" "),r("p",[e._v("还使用之前的 "),r("code",[e._v("hello-docker")]),e._v(" 镜像为例，执行：")]),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" save hello-docker "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" hello-docker.tar\n")])])]),r("p",[e._v("或：")]),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" save "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--output")]),e._v(" hello-docker.tar hello-docker\n")])])]),r("p",[e._v("执行成功之后，可以看见当前目录多了一个名为 "),r("code",[e._v("hello-docker.tar")]),e._v(" 的文件。")]),e._v(" "),r("h3",{attrs:{id:"使用-docker-load-加载归档文件为镜像"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用-docker-load-加载归档文件为镜像"}},[e._v("#")]),e._v(" 使用 docker load 加载归档文件为镜像")]),e._v(" "),r("p",[e._v("通过上一步骤我们得到了一个 "),r("code",[e._v("tar")]),e._v(" 归档文件，这时候可以将该文件用自己喜欢的方式传输至任意主机，然后通过 "),r("a",{attrs:{href:"https://docs.docker.com/engine/reference/commandline/load/",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker load"),r("OutboundLink")],1),e._v(" 来加载该归档文件为镜像。")]),e._v(" "),r("p",[e._v("执行下方命令：")]),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" load "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v(" hello-docker.tar\n")])])]),r("p",[e._v("或者：")]),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" load "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--input")]),e._v(" hello-docker.tar\n")])])]),r("p",[e._v("成功之后执行 "),r("code",[e._v("docker images")]),e._v(" 可以看见 "),r("code",[e._v("hello-docker")]),e._v(" 镜像。有了镜像文件之后就可以跟往常一样通过镜像启动我们的容器了。")]),e._v(" "),r("h2",{attrs:{id:"使用-docker-export-docker-import"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用-docker-export-docker-import"}},[e._v("#")]),e._v(" 使用 docker export & docker import")]),e._v(" "),r("h3",{attrs:{id:"使用-docker-export-将容器输出为归档文件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用-docker-export-将容器输出为归档文件"}},[e._v("#")]),e._v(" 使用 docker export 将容器输出为归档文件")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://docs.docker.com/engine/reference/commandline/export/",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker export"),r("OutboundLink")],1),e._v(" 能够将"),r("strong",[e._v("容器")]),e._v("文件系统输出为归档文件。"),r("code",[e._v("docker export")]),e._v(" 不会输出与容器相关联的 "),r("code",[e._v("volumes")]),e._v("（卷）的内容。比如一个卷挂载在一个容器中，"),r("code",[e._v("docker export")]),e._v(" 只会输入该容器卷的目录，但是不包含该目录的内容。")]),e._v(" "),r("p",[e._v("执行如下命令：")]),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("容器名"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" hello-docker.tar\n")])])]),r("p",[e._v("或：")]),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--output")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"hello-docker.tar"')]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("容器名"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])]),r("p",[e._v("执行成功之后，可以看到 "),r("code",[e._v("hello-docker.tar")]),e._v(" 文件。")]),e._v(" "),r("h3",{attrs:{id:"使用-docker-import-导入归档文件为镜像"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用-docker-import-导入归档文件为镜像"}},[e._v("#")]),e._v(" 使用 docker import 导入归档文件为镜像")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://docs.docker.com/engine/reference/commandline/import/",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker import"),r("OutboundLink")],1),e._v(" 能够将归档的压缩文件导入为镜像。")]),e._v(" "),r("p",[e._v("执行下方命令，可以发现多了一个没有标记的镜像，其 "),r("code",[e._v("REPOSITORY")]),e._v(" 和 "),r("code",[e._v("TAG")]),e._v(" 都为 "),r("code",[e._v("none")]),e._v("。")]),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("import")]),e._v(" hello-docker.tar\n")])])]),r("p",[e._v("为了方便查找一般使用该命令的时候都会为其指定标记，如下：")]),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("import")]),e._v(" hello-docker.tar new-image:latest\n")])])]),r("p",[e._v("或者使用管道操作从标准输出流导出。")]),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" hello-docker.tar "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("import")]),e._v(" - new-image:latest\n")])])]),r("p",[e._v("执行成功之后可以发现对一个 new-image:latest 的镜像。")]),e._v(" "),r("h2",{attrs:{id:"docker-save-vs-docker-export"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker-save-vs-docker-export"}},[e._v("#")]),e._v(" docker save VS docker export")]),e._v(" "),r("ol",[r("li",[r("code",[e._v("docker save")]),e._v(" 的操作对象是镜像，而 "),r("code",[e._v("docker export")]),e._v(" 的操作对象是容器。")]),e._v(" "),r("li",[r("code",[e._v("docker save")]),e._v(" 能够保存镜像的 "),r("code",[e._v("layers")]),e._v("、"),r("code",[e._v("tags")]),e._v("、"),r("code",[e._v("versions")]),e._v(" 等信息，而 "),r("code",[e._v("docker export")]),e._v(" 只是输出容器的快照而已，不包含 "),r("code",[e._v("layers")]),e._v("、"),r("code",[e._v("tags")]),e._v("、"),r("code",[e._v("versions")]),e._v(" 等信息。（这一点可以通过 "),r("code",[e._v("docker history")]),e._v(" 查看双方产生的镜像历史层不同可确认）。")])]),e._v(" "),r("h2",{attrs:{id:"docker-load-vs-docker-import"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker-load-vs-docker-import"}},[e._v("#")]),e._v(" docker load VS docker import")]),e._v(" "),r("ol",[r("li",[r("code",[e._v("docker load")]),e._v(" 一般用于加载 "),r("code",[e._v("docker save")]),e._v(" 的产物，而 "),r("code",[e._v("docker import")]),e._v(" 一般用于加载 "),r("code",[e._v("docker export")]),e._v(" 的产物。")]),e._v(" "),r("li",[e._v("因为 "),r("code",[e._v("docker save")]),e._v(" 的产物带有 "),r("code",[e._v("layers")]),e._v("、"),r("code",[e._v("tags")]),e._v("、"),r("code",[e._v("versions")]),e._v(" 等信息，所以 "),r("code",[e._v("docker load")]),e._v(" 只需指定文件无需额外参数即可产生一样的镜像文件。而 "),r("code",[e._v("docker export")]),e._v(" 的产物不带上述信息，所以使用 "),r("code",[e._v("docker import")]),e._v(" 的时候能指定镜像名称 & "),r("code",[e._v("tag")]),e._v("，以及能够通过 "),r("code",[e._v("--change")]),e._v(" 参数将新的 "),r("code",[e._v("Dockerfile")]),e._v(" 指令应用于创建的镜像中。")])]),e._v(" "),r("h2",{attrs:{id:"参考"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),r("ol",[r("li",[r("a",{attrs:{href:"https://medium.com/@sanketmeghani/docker-transferring-docker-images-without-registry-2ed50726495f",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker: Transferring Docker Images Without Registry"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://medium.com/bb-tutorials-and-thoughts/docker-import-vs-load-91d418f0073c",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker — Import vs load"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://medium.com/bb-tutorials-and-thoughts/docker-export-vs-save-7053504546e5",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker — export vs save"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);r.default=o.exports}}]);