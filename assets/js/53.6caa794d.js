(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{294:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"规范项目的-git-commit-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#规范项目的-git-commit-message","aria-hidden":"true"}},[t._v("#")]),t._v(" 规范项目的 Git Commit Message")]),t._v(" "),a("p",[t._v("每个项目少不了规范，然而作为记录项目发展的 "),a("code",[t._v("Git")]),t._v(" 也应该规范化，规范的 "),a("code",[t._v("commit message")]),t._v(" 便于我们记录、追溯问题，同时人机可读的规范也让项目自动化更简单，比如根据 "),a("code",[t._v("commit message")]),t._v(" 自动生成 "),a("code",[t._v("changelog")]),t._v(" 等等。")]),t._v(" "),a("p",[t._v("下面将介绍规范的 "),a("code",[t._v("commit message")]),t._v("，以及如何通过工具校验和高效生成满足规范的 "),a("code",[t._v("commit message")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"规范介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#规范介绍","aria-hidden":"true"}},[t._v("#")]),t._v(" 规范介绍")]),t._v(" "),a("p",[t._v("目前社区使用范围较广的是 "),a("a",{attrs:{href:"https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines",target:"_blank",rel:"noopener noreferrer"}},[t._v("AngularJS 团队的 commit message 规范"),a("OutboundLink")],1),t._v("。该规范的 "),a("code",[t._v("message")]),t._v(" 格式由 3 部分组成，分别是 "),a("code",[t._v("header")]),t._v("、"),a("code",[t._v("body")]),t._v("、"),a("code",[t._v("footer")]),t._v("。一个 "),a("code",[t._v("commit message")]),t._v(" 基本格式如下。")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("scope"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("subject"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("BLANK LINE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("BLANK LINE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("footer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("h3",{attrs:{id:"header"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#header","aria-hidden":"true"}},[t._v("#")]),t._v(" header")]),t._v(" "),a("p",[t._v("首行为 "),a("code",[t._v("header")]),t._v("，是必须存在的。"),a("code",[t._v("header")]),t._v(" 由三部分组成，分别是：")]),t._v(" "),a("ol",[a("li",[a("p",[a("code",[t._v("type")]),t._v(": 提交类型，必填。常用的有如下类型：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("feat")]),t._v("：新功能")]),t._v(" "),a("li",[a("code",[t._v("fix")]),t._v("：bug 修复")]),t._v(" "),a("li",[a("code",[t._v("docs")]),t._v("：文档修改")]),t._v(" "),a("li",[a("code",[t._v("style")]),t._v("： 不会修改代码运行逻辑的代码风格、格式改动（比如增、删了空行、分号等等）")]),t._v(" "),a("li",[a("code",[t._v("refactor")]),t._v("：重构")]),t._v(" "),a("li",[a("code",[t._v("perf")]),t._v("：性能优化")]),t._v(" "),a("li",[a("code",[t._v("test")]),t._v("：添加、修改测试")]),t._v(" "),a("li",[a("code",[t._v("chore")]),t._v("：其它，比如项目的构建过程、辅助工具的调整（比如文档生成、release 及其方式）。")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("scope")]),t._v("：影响范围，选填。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("subject")]),t._v("：主题，本次提交的简短描述，必填。")])])]),t._v(" "),a("p",[t._v("所以一个规范的 "),a("code",[t._v("header")]),t._v(" 可如右方所示："),a("code",[t._v("feat(src): add login page")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"body"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#body","aria-hidden":"true"}},[t._v("#")]),t._v(" body")]),t._v(" "),a("p",[a("code",[t._v("body")]),t._v(" 为本次修改详细描述，比如描述本次修改的动机以及与以往的不同对比，"),a("code",[t._v("body")]),t._v(" 为选填。")]),t._v(" "),a("h3",{attrs:{id:"footer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#footer","aria-hidden":"true"}},[t._v("#")]),t._v(" footer")]),t._v(" "),a("p",[a("code",[t._v("footer")]),t._v(" 应该包含本次修改的 "),a("code",[t._v("Breaking Changes")]),t._v(" 以及本次关闭了的 "),a("code",[t._v("issues")]),t._v("，"),a("code",[t._v("footer")]),t._v(" 也为选填。")]),t._v(" "),a("h2",{attrs:{id:"使用规范校验工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用规范校验工具","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用规范校验工具")]),t._v(" "),a("p",[t._v("\b 口头约定往往容易被打破，为此我们需要工具来让团队所有人都严格遵守规范，所以出现了 "),a("code",[t._v("eslint")]),t._v(" 等代码校验工具。 当然 "),a("code",[t._v("commit message")]),t._v(" 也有对应的校验工具。")]),t._v(" "),a("h3",{attrs:{id:"安装校验工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装校验工具","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装校验工具")]),t._v(" "),a("p",[t._v("新建一个项目用于安装、测试。然后执行下方命令安装依赖。")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g @commitlint/cli @commitlint/config-conventional\n")])])]),a("p",[t._v("我们使用 "),a("a",{attrs:{href:"https://commitlint.js.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("@commitlint/cli"),a("OutboundLink")],1),t._v(" 来校验 "),a("code",[t._v("commit message")]),t._v("，而 "),a("a",{attrs:{href:"https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional",target:"_blank",rel:"noopener noreferrer"}},[t._v("@commitlint/config-conventional"),a("OutboundLink")],1),t._v(" 约定式提交规范，是校验工具所遵循规范。我们也可以选择社区中的 "),a("a",{attrs:{href:"https://github.com/conventional-changelog/commitlint#shared-configuration",target:"_blank",rel:"noopener noreferrer"}},[t._v("其它规范"),a("OutboundLink")],1),t._v("，甚至自定义规范。")]),t._v(" "),a("h3",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),a("p",[a("code",[t._v("unix")]),t._v(" 系统中可执行下方命令，生成 "),a("code",[t._v("commitlint")]),t._v(" 的配置文件 "),a("code",[t._v("commitlint.config.js")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"module.exports = {extends: ['@commitlint/config-conventional']}\"")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" commitlint.config.js\n")])])]),a("p",[t._v("或者可以选择手动新增配置文件 "),a("code",[t._v("commitlint.config.js")]),t._v("，该文件一般如下。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@commitlint/config-conventional'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("code",[t._v("extends")]),t._v("：用于告诉校验工具应该继承使用哪个规范，这里使用了 "),a("code",[t._v("@commitlint/config-conventional")]),t._v("。")]),t._v(" "),a("p",[a("code",[t._v("ignores")]),t._v("：如果数组里面的函数返回 "),a("code",[t._v("true")]),t._v("，则会跳过检测。一些非人工的 "),a("code",[t._v("commit")]),t._v("，比如 "),a("code",[t._v("merge")]),t._v(" 或者 "),a("code",[t._v("CI")]),t._v(" 中的自动 "),a("code",[t._v("commit")]),t._v("，有时候我们并不期望对其进行检测，则可使用该参数对部分 "),a("code",[t._v("message")]),t._v(" 忽略检测。")]),t._v(" "),a("p",[t._v("更多配置项可查看 "),a("a",{attrs:{href:"https://commitlint.js.org/#/reference-configuration",target:"_blank",rel:"noopener noreferrer"}},[t._v("commitlint reference-configuration"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试","aria-hidden":"true"}},[t._v("#")]),t._v(" 测试")]),t._v(" "),a("p",[t._v("为了测试校验工具是否正确安装、配置，用 "),a("code",[t._v("git")]),t._v(" 添加一个不规范的 "),a("code",[t._v("commit message")]),t._v("，比如 "),a("code",[t._v("test")]),t._v("。")]),t._v(" "),a("p",[t._v("然后执行 "),a("code",[t._v("commitlint -e")]),t._v(" 触发 "),a("code",[t._v("commitlint")]),t._v("，"),a("code",[t._v("-e")]),t._v(" 参数用于校验最后一次的 "),a("code",[t._v("commit message")]),t._v("，执行命令后 "),a("code",[t._v("terminal")]),t._v(" 出现如下错误，说明 "),a("code",[t._v("message")]),t._v(" 校验失败了。至此校验工具已安装、配置成功。")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("⧗   input: "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\n✖   subject may not be empty "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("subject-empty"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n✖   "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("type")]),t._v(" may not be empty "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("type-empty"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n✖   found "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" problems, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" warnings\nⓘ   Get help: https://github.com/conventional-changelog/commitlint/"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#what-is-commitlint")]),t._v("\n")])])]),a("h3",{attrs:{id:"使用-git-hook-完成自动校验"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-git-hook-完成自动校验","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用 git hook 完成自动校验")]),t._v(" "),a("p",[t._v("搭配 "),a("a",{attrs:{href:"https://typicode.github.io/husky/#/",target:"_blank",rel:"noopener noreferrer"}},[t._v("husky"),a("OutboundLink")],1),t._v("，让检测自动化，提交的时候如果 "),a("code",[t._v("message")]),t._v(" 不符合规范，会提交失败，保证了团队内的提交都必须符合规范。")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("安装 "),a("code",[t._v("husky")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" husky --save-dev\n")])])])]),t._v(" "),a("li",[a("p",[t._v("激活 "),a("code",[t._v("hooks")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("npx husky "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("配置 "),a("code",[t._v("npm")]),t._v(" 钩子，在依赖安装完成后自动激活 "),a("code",[t._v("hooks")]),t._v("。")]),t._v(" "),a("p",[t._v("为了在团队内其他同事安装依赖后能自动激活 "),a("code",[t._v("hooks")]),t._v("，可在 "),a("code",[t._v("package.json")]),t._v(" 的 "),a("code",[t._v("script")]),t._v(" 中添加钩子，安装完依赖后自动激活钩子。")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"postinstall"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"husky install"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("添加 "),a("code",[t._v("hooks")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("npx husky "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" .husky/commit-msg "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"npx --no-install commitlint --edit '),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v('"')]),t._v("\n")])])]),a("p",[t._v("执行成功后会发现多了一个 "),a("code",[t._v(".husky")]),t._v(" 的文件夹，里面就是 "),a("code",[t._v("git hooks")]),t._v(" 相关执行文件。")])])]),t._v(" "),a("p",[t._v("最后，我们再对当前修改修改进行 "),a("code",[t._v("add")]),t._v("、"),a("code",[t._v("commit")]),t._v("，能够看见在 "),a("code",[t._v("commit")]),t._v(" 时候自动校验 "),a("code",[t._v("message")]),t._v(" 了。")]),t._v(" "),a("h2",{attrs:{id:"高效生成规范的-commit-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高效生成规范的-commit-message","aria-hidden":"true"}},[t._v("#")]),t._v(" 高效生成规范的 commit message")]),t._v(" "),a("p",[t._v("规范是有了，但此时会发现写个规范的 "),a("code",[t._v("commit message")]),t._v(" 太费劲了，效率低难以在团队中推广。")]),t._v(" "),a("p",[t._v("可以使用 "),a("a",{attrs:{href:"https://github.com/commitizen/cz-cli",target:"_blank",rel:"noopener noreferrer"}},[t._v("commitizen"),a("OutboundLink")],1),t._v("，以便能够通过简单交互操作就能生成规范的 "),a("code",[t._v("commit message")]),t._v("。")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("安装 "),a("code",[t._v("commitizen")]),t._v("。")]),t._v(" "),a("ul",[a("li",[t._v("全局安装，方便使用全局 "),a("code",[t._v("CLI")]),t._v("。")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" commitizen -g\n")])])]),a("ul",[a("li",[t._v("项目中安装，防止别人因为没有全局安装，导致缺少依赖，触发失败。")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" commitizen -D\n")])])])]),t._v(" "),a("li",[a("p",[t._v("因为我们使用的是 "),a("code",[t._v("conventional commit")]),t._v(" 规范，所以也对应的初始化项目的 "),a("code",[t._v("commitizen")]),t._v(" 使用 "),a("code",[t._v("cz-conventional-changelog")]),t._v(" 适配器。")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("commitizen init cz-conventional-changelog --save-dev --save-exact\n")])])])]),t._v(" "),a("li",[a("p",[t._v("最后在添加 "),a("code",[t._v("npm script")]),t._v(" 命令，方便统一、快速调起 "),a("code",[t._v("commitizen")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"commit"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cz"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),a("p",[t._v("安装、配置完成之后，执行 "),a("code",[t._v("npm run commit")]),t._v("，就可以看见 "),a("code",[t._v("terminal")]),t._v(" 中出现 "),a("code",[t._v("commitizen")]),t._v(" 的交互界面，只要按照 "),a("code",[t._v("terminal")]),t._v(" 中的描述一步步进行操作，就够生成规范的 "),a("code",[t._v("commit message")]),t._v(" 了。")]),t._v(" "),a("p",[t._v("本文相关代码示例可从 "),a("a",{attrs:{href:"https://github.com/xuwenchao66/standardize-git-commit-message",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/xuwenchao66/standardize-git-commit-message"),a("OutboundLink")],1),t._v(" 中进行查阅。")]),t._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines",target:"_blank",rel:"noopener noreferrer"}},[t._v("AngularJS git-commit-guidelines"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Commit message 和 Change log 编写指南"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://commitlint.js.org/#/",target:"_blank",rel:"noopener noreferrer"}},[t._v("commitlint.js"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://typicode.github.io/husky/#/",target:"_blank",rel:"noopener noreferrer"}},[t._v("husky"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=n.exports}}]);