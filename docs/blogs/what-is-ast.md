# 什么是 AST

## 简介

AST，abstract syntax tree（抽象语法树的缩写），就是编程源码的语法抽象、结构化的一种表现形式。

如 `JavaScript` 中的这么一句赋值语句。

```js
const a = 1
```

转换成 `AST` 后就像下面这样。

![ast-tree](./img/ast-tree.png)

这种与编程语言无关的抽象、结构化表达，就是 `AST`。

## 身边的 AST

我们也许会在某个社区、某篇文章中看到过 `AST` 这样的字眼，在不了解它之前，觉得它离我们很“遥远”，但其实 `AST` 与编程却是息息相关。

### 程序执行

- 无论是解释型语言还是编译型语言，在真正运行前，它们都有共同的一步，那就是需要将源码解析成结构化的文本，也就是 `AST`。

- `AST` 除了让源码结构化，同时也是语义分析的重要组成部分，源码结构化后让编译器可以校验语法是否使用正确。

- 最后， `AST` 会转化成机器所能识别的字节码，让机器按照指令运行起来。

### 工程化中的工具

- 在前端工程化之中，我们所熟悉的 `webpack`、`babel`、`eslint` 等无一不是运作在 `AST` 之上。

- `AST` 的结构化表达让这些工具都能“读懂”源码，从而进行静态分析，实现更多扩展功能。

## AST 的生成步骤

### 词法分析

首先，词法分析，也叫做扫描（scanner）。将我们的源码按照规则转换成一个个 `token`。

如。

```js
const a = 1
```

结果词法分析后的表达可能是。

```txt
Keyword(const) Identifier(a) Punctuator(=) Numeric(1)
```

这个过程也可理解为分词，比如这么一句话 “今天天气真好啊。” 能正确理解这句话的前提，就是分词、断句。

那么这句话可以断句为 “今天”，“天气”，“真好”，“啊”，“。”。

### 语法分析

在词法分析之后，就开始语法分析，也叫做解析（parser）。它会将经过词法分析后得到的 `tokens` 根据语法规则转换成树的表达形式，也就是 `AST`，就像文章中的第一张图一样。

这里也可以理解为正确断句（词法分析）之后，才能根据每个词的意思，去理解整个句子的意思。

推荐一个网站 [https://astexplorer.net/](https://astexplorer.net/)，能够在线将源码转换成 `AST`，方便我们快速验证、加深理解。

## Babel 中的 AST

## 参考

1. [How JavaScript works: Parsing, Abstract Syntax Trees (ASTs) + 5 tips on how to minimize parse time](https://blog.sessionstack.com/how-javascript-works-parsing-abstract-syntax-trees-asts-5-tips-on-how-to-minimize-parse-time-abfcf7e8a0c8)
2. [Abstract syntax tree](https://en.wikipedia.org/wiki/Abstract_syntax_tree)
3. [Babel 是如何读懂 JS 代码的](https://zhuanlan.zhihu.com/p/27289600)
4. [AST for JavaScript developers](https://itnext.io/ast-for-javascript-developers-3e79aeb08343)
