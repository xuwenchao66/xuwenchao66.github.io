(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{214:function(t,a,s){t.exports=s.p+"assets/img/ast-tree.b03a8a06.png"},301:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"什么是-ast"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是-ast","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么是 AST")]),t._v(" "),n("h2",{attrs:{id:"简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#简介","aria-hidden":"true"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),n("p",[n("code",[t._v("AST")]),t._v("，abstract syntax tree（抽象语法树的缩写），就是编程代码的语法抽象、结构化的一种表现形式。")]),t._v(" "),n("p",[t._v("如 "),n("code",[t._v("JavaScript")]),t._v(" 中的这么一句赋值语句。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" a "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])]),n("p",[t._v("转换成 "),n("code",[t._v("AST")]),t._v(" 后就像下面这样。")]),t._v(" "),n("p",[n("img",{attrs:{src:s(214),alt:"ast-tree"}})]),t._v(" "),n("p",[t._v("这种与编程语言无关的抽象、结构化表达，就是 "),n("code",[t._v("AST")]),t._v("。")]),t._v(" "),n("h2",{attrs:{id:"身边的-ast"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#身边的-ast","aria-hidden":"true"}},[t._v("#")]),t._v(" 身边的 AST")]),t._v(" "),n("p",[t._v("我们也许会在某个社区、某篇文章中看到过 "),n("code",[t._v("AST")]),t._v(" 这样的字眼，在不了解它之前，觉得它离我们很“遥远”，但其实 "),n("code",[t._v("AST")]),t._v(" 与编程却是息息相关。")]),t._v(" "),n("h3",{attrs:{id:"程序执行"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#程序执行","aria-hidden":"true"}},[t._v("#")]),t._v(" 程序执行")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("无论是解释型语言还是编译型语言，在真正运行前，它们都有共同的一步，那就是需要将代码解析成结构化的文本，也就是 "),n("code",[t._v("AST")]),t._v("。")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("AST")]),t._v(" 除了让代码结构化，同时也是语义分析的重要组成部分，代码结构化后让编译器可以校验语法是否正确。")])]),t._v(" "),n("li",[n("p",[t._v("最后， "),n("code",[t._v("AST")]),t._v(" 会转化成机器所能识别的字节码，让机器按照指令运行起来。")])])]),t._v(" "),n("h3",{attrs:{id:"编程工具"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#编程工具","aria-hidden":"true"}},[t._v("#")]),t._v(" 编程工具")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("在前端工程化之中，我们所熟悉的 "),n("code",[t._v("webpack")]),t._v("、"),n("code",[t._v("babel")]),t._v("、"),n("code",[t._v("eslint")]),t._v(" 甚至编辑器、代码格式化插件等无一不是运作在 "),n("code",[t._v("AST")]),t._v(" 之上。")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("AST")]),t._v(" 的结构化表达让这些工具都能“读懂”代码，从而进行静态分析，实现更多扩展功能。")])])]),t._v(" "),n("h2",{attrs:{id:"ast-的生成步骤"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ast-的生成步骤","aria-hidden":"true"}},[t._v("#")]),t._v(" AST 的生成步骤")]),t._v(" "),n("h3",{attrs:{id:"词法分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#词法分析","aria-hidden":"true"}},[t._v("#")]),t._v(" 词法分析")]),t._v(" "),n("p",[t._v("首先是词法分析，也叫做扫描（scanner）。将我们的代码按照规则转换成一个个 "),n("code",[t._v("token")]),t._v("。")]),t._v(" "),n("p",[t._v("如。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" a "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])]),n("p",[t._v("结果词法分析后的表达可能是。")]),t._v(" "),n("div",{staticClass:"language-txt extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("Keyword(const) Identifier(a) Punctuator(=) Numeric(1)\n")])])]),n("p",[t._v("这个过程也可理解为分词，比如这么一句话 “今天天气真好啊。” 能正确理解这句话的前提，就是分词、断句。")]),t._v(" "),n("p",[t._v("那么这句话可以断句为 “今天”，“天气”，“真好”，“啊”，“。”。")]),t._v(" "),n("h3",{attrs:{id:"语法分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#语法分析","aria-hidden":"true"}},[t._v("#")]),t._v(" 语法分析")]),t._v(" "),n("p",[t._v("在词法分析之后，就开始语法分析，也叫做解析（parser）。它会将经过词法分析后得到的 "),n("code",[t._v("tokens")]),t._v(" 根据语法规则转换成树的表达形式，也就是 "),n("code",[t._v("AST")]),t._v("，就像文章中的第一张图一样。")]),t._v(" "),n("p",[t._v("这里也可以理解为正确断句（词法分析）之后，才能根据每个词的意思，去理解整个句子的意思。")]),t._v(" "),n("p",[t._v("推荐一个网站 "),n("a",{attrs:{href:"https://astexplorer.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://astexplorer.net/"),n("OutboundLink")],1),t._v("，能够在线将代码转换成 "),n("code",[t._v("AST")]),t._v("，方便我们快速验证、加深理解。")]),t._v(" "),n("h2",{attrs:{id:"babel-基本原理-ast"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#babel-基本原理-ast","aria-hidden":"true"}},[t._v("#")]),t._v(" Babel 基本原理 & AST")]),t._v(" "),n("p",[n("code",[t._v("AST")]),t._v(" 有不同的实现标准，比如。")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/estree/estree",target:"_blank",rel:"noopener noreferrer"}},[t._v("estree"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/babel/babel/blob/main/packages/babel-parser/ast/spec.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("babel"),n("OutboundLink")],1)])]),t._v(" "),n("p",[n("code",[t._v("AST")]),t._v(" 的解析器比较流行的有。")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/acornjs/acorn",target:"_blank",rel:"noopener noreferrer"}},[t._v("acorn"),n("OutboundLink")],1),t._v("，快速且稳定。")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/eslint/espree",target:"_blank",rel:"noopener noreferrer"}},[t._v("espree"),n("OutboundLink")],1),t._v("，基于 "),n("code",[t._v("acorn")]),t._v("，在 "),n("code",[t._v("eslint")]),t._v(" 中使用。")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://babeljs.io/docs/en/babel-parser",target:"_blank",rel:"noopener noreferrer"}},[t._v("@babel/parser"),n("OutboundLink")],1),t._v("，也是基于 "),n("code",[t._v("acorn")]),t._v("。")])]),t._v(" "),n("p",[t._v("下面就拿比较熟悉的 "),n("code",[t._v("babel")]),t._v(" 工具链来进行 "),n("code",[t._v("AST")]),t._v(" 的相关操作。")]),t._v(" "),n("h3",{attrs:{id:"将代码解析成-ast"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#将代码解析成-ast","aria-hidden":"true"}},[t._v("#")]),t._v(" 将代码解析成 AST")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://babeljs.io/docs/en/babel-parser",target:"_blank",rel:"noopener noreferrer"}},[t._v("@babel/parser"),n("OutboundLink")],1),t._v("， "),n("code",[t._v("Babel")]),t._v(" 在使用的 "),n("code",[t._v("JavaScript")]),t._v(" 解析器。")]),t._v(" "),n("p",[t._v("安装 "),n("code",[t._v("@babel/parser")]),t._v("，然后新建如下脚本 "),n("code",[t._v("parse.js")]),t._v("。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" babelParser "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@babel/parser'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" code "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'const a = 1'")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ast "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" babelParser"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("code"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ast"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("program"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("执行 "),n("code",[t._v("node parse.js")]),t._v("，可以看出控制台中输入了如下一个对象。这就是 "),n("code",[t._v("Babel")]),t._v(" 规范的 "),n("code",[t._v("AST")]),t._v("。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("Node "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Program'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  start"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  end"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  loc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" SourceLocation "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    start"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Position "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" line"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" column"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    end"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Position "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" line"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" column"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    filename"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    identifierName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  range"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  leadingComments"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  trailingComments"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  innerComments"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  extra"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  sourceType"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'script'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  interpreter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  body"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    Node "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'VariableDeclaration'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      start"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      end"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      loc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("SourceLocation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      range"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      leadingComments"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      trailingComments"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      innerComments"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      extra"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      declarations"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Array"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      kind"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'const'")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  directives"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("上面是直接解析成了 "),n("code",[t._v("AST")]),t._v("，当然其中也有词法分析的过程，只不过这里的 "),n("code",[t._v("parse")]),t._v(" 将词法分析 & 语法分析操作结合了，如传入了 "),n("code",[t._v("tokens")]),t._v(" 参数，那么输出的结果中就能看见词法分析得到的 "),n("code",[t._v("tokens")]),t._v(" 数组，如下。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" babelParser "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@babel/parser'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" code "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'const a = 1'")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ast "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" babelParser"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("code"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" tokens"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ast"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tokens"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("h3",{attrs:{id:"访问、更新-ast-ast-转为代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#访问、更新-ast-ast-转为代码","aria-hidden":"true"}},[t._v("#")]),t._v(" 访问、更新 AST & AST 转为代码")]),t._v(" "),n("p",[n("code",[t._v("Babel")]),t._v(" 中使用 "),n("a",{attrs:{href:"https://babeljs.io/docs/en/babel-traverse",target:"_blank",rel:"noopener noreferrer"}},[t._v("@babel/traverse"),n("OutboundLink")],1),t._v(" 来对 "),n("code",[t._v("AST")]),t._v(" 进行遍历、更新。")]),t._v(" "),n("p",[t._v("操作完 "),n("code",[t._v("AST")]),t._v(" 之后就可以通过 "),n("a",{attrs:{href:"https://babeljs.io/docs/en/babel-generator",target:"_blank",rel:"noopener noreferrer"}},[t._v("@babel/generator"),n("OutboundLink")],1),t._v("，来将 "),n("code",[t._v("AST")]),t._v(" 再转换为代码。")]),t._v(" "),n("p",[t._v("修改测试脚本。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" babelParser "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@babel/parser'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" babelTraverse "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@babel/traverse'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("default\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" babelGenerator "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@babel/generator'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("default\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" code "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'const a = 1'")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 解析成 AST")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ast "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" babelParser"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("code"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 遍历、更新节点")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("babelTraverse")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ast"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("enter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("path")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Identifier")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("path")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将标识符 a 转换为 b")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b'")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 重新生成代码")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" newCode "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("babelGenerator")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ast"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" code"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newCode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("code"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("上述代码中遍历的 "),n("code",[t._v("enter")]),t._v(" 方法，访问每个节点的时候都会执行。而 "),n("code",[t._v("Identifier")]),t._v(" 只有访问到标识符时，比如代码里的 "),n("code",[t._v("a")]),t._v("，才会执行。")]),t._v(" "),n("p",[t._v("因为 "),n("code",[t._v("AST")]),t._v(" 也是一个对象，所以可以直接修改对象属性值来对 "),n("code",[t._v("AST")]),t._v(" 进行修改，比如上面的 "),n("code",[t._v("path.node.name = 'b'")]),t._v("。")]),t._v(" "),n("p",[t._v("修改完成之后通过 "),n("code",[t._v("@babel/generator")]),t._v(" 将修改过后的 "),n("code",[t._v("AST")]),t._v(" 生成代码。可以看见控制台输出了 "),n("code",[t._v("const b = 1")]),t._v("，标识符 "),n("code",[t._v("a")]),t._v(" 成功修改为 "),n("code",[t._v("b")]),t._v("。")]),t._v(" "),n("p",[t._v("经过上面的实践、分析也能了解 "),n("code",[t._v("Babel")]),t._v(" 的基本原理了，它是基于 "),n("code",[t._v("AST")]),t._v("，通过下面步骤来实现各种功能。")]),t._v(" "),n("ol",[n("li",[t._v("将代码解析成 "),n("code",[t._v("AST")]),t._v("。")]),t._v(" "),n("li",[t._v("遍历、访问 "),n("code",[t._v("AST")]),t._v("，对其进行修改。")]),t._v(" "),n("li",[t._v("将修改过后的 "),n("code",[t._v("AST")]),t._v(" 重新转换为代码。")])]),t._v(" "),n("h2",{attrs:{id:"参考"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),n("ol",[n("li",[n("a",{attrs:{href:"https://blog.sessionstack.com/how-javascript-works-parsing-abstract-syntax-trees-asts-5-tips-on-how-to-minimize-parse-time-abfcf7e8a0c8",target:"_blank",rel:"noopener noreferrer"}},[t._v("How JavaScript works: Parsing, Abstract Syntax Trees (ASTs) + 5 tips on how to minimize parse time"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Abstract_syntax_tree",target:"_blank",rel:"noopener noreferrer"}},[t._v("Abstract syntax tree"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/27289600",target:"_blank",rel:"noopener noreferrer"}},[t._v("Babel 是如何读懂 JS 代码的"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://itnext.io/ast-for-javascript-developers-3e79aeb08343",target:"_blank",rel:"noopener noreferrer"}},[t._v("AST for JavaScript developers"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://stackoverflow.com/a/66194129/7627744",target:"_blank",rel:"noopener noreferrer"}},[t._v("What is JavaScript AST, how to play with it?"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);