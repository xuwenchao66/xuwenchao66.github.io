# 什么是 AST

## 简介

`AST`，abstract syntax tree（抽象语法树的缩写），就是编程代码的语法抽象、结构化的一种表现形式。

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

- 无论是解释型语言还是编译型语言，在真正运行前，它们都有共同的一步，那就是需要将代码解析成结构化的文本，也就是 `AST`。

- `AST` 除了让代码结构化，同时也是语义分析的重要组成部分，代码结构化后让编译器可以校验语法是否正确。

- 最后， `AST` 会转化成机器所能识别的字节码，让机器按照指令运行起来。

### 编程工具

- 在前端工程化之中，我们所熟悉的 `webpack`、`babel`、`eslint` 甚至编辑器、代码格式化插件等无一不是运作在 `AST` 之上。

- `AST` 的结构化表达让这些工具都能“读懂”代码，从而进行静态分析，实现更多扩展功能。

## AST 的生成步骤

### 词法分析

首先是词法分析，也叫做扫描（scanner）。将我们的代码按照规则转换成一个个 `token`。

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

推荐两个网站，能够在线将代码转换成 `tokens`、`AST`，方便我们快速验证、加深理解。

1. [https://astexplorer.net/](https://astexplorer.net/)
1. [https://esprima.org/demo/parse.html](https://esprima.org/demo/parse.html)

## Babel 基本原理 & AST

`AST` 有不同的实现标准，比如。

- [estree](https://github.com/estree/estree)
- [babel](https://github.com/babel/babel/blob/main/packages/babel-parser/ast/spec.md)

`AST` 的解析器比较流行的有。

- [acorn](https://github.com/acornjs/acorn)，快速且稳定。
- [espree](https://github.com/eslint/espree)，基于 `acorn`，在 `eslint` 中使用。
- [@babel/parser](https://babeljs.io/docs/en/babel-parser)，也是基于 `acorn`。

下面就拿比较熟悉的 `babel` 工具链来进行 `AST` 的相关操作。

### 将代码解析成 AST

[@babel/parser](https://babeljs.io/docs/en/babel-parser)， `Babel` 在使用的 `JavaScript` 解析器。

安装 `@babel/parser`，然后新建如下脚本 `parse.js`。

```js
const babelParser = require('@babel/parser')

const code = 'const a = 1'

const ast = babelParser.parse(code)

console.log(ast.program)
```

执行 `node parse.js`，可以看出控制台中输入了如下一个对象。这就是 `Babel` 规范的 `AST`。

```js
Node {
  type: 'Program',
  start: 0,
  end: 11,
  loc: SourceLocation {
    start: Position { line: 1, column: 0 },
    end: Position { line: 1, column: 11 },
    filename: undefined,
    identifierName: undefined
  },
  range: undefined,
  leadingComments: undefined,
  trailingComments: undefined,
  innerComments: undefined,
  extra: undefined,
  sourceType: 'script',
  interpreter: null,
  body: [
    Node {
      type: 'VariableDeclaration',
      start: 0,
      end: 11,
      loc: [SourceLocation],
      range: undefined,
      leadingComments: undefined,
      trailingComments: undefined,
      innerComments: undefined,
      extra: undefined,
      declarations: [Array],
      kind: 'const'
    }
  ],
  directives: []
}
```

上面是直接解析成了 `AST`，当然其中也有词法分析的过程，只不过这里的 `parse` 将词法分析 & 语法分析操作结合了，如传入了 `tokens` 参数，那么输出的结果中就能看见词法分析得到的 `tokens` 数组，如下。

```js
const babelParser = require('@babel/parser')

const code = 'const a = 1'

const ast = babelParser.parse(code, { tokens: true })

console.log(ast.tokens)
```

### 访问、更新 AST & AST 转为代码

`Babel` 中使用 [@babel/traverse](https://babeljs.io/docs/en/babel-traverse) 来对 `AST` 进行遍历、更新。

操作完 `AST` 之后就可以通过 [@babel/generator](https://babeljs.io/docs/en/babel-generator)，来将 `AST` 再转换为代码。

安装完 `@babel/traverse` 和 `@babel/generator` 后，修改测试脚本。

```js
const babelParser = require('@babel/parser')
const babelTraverse = require('@babel/traverse').default
const babelGenerator = require('@babel/generator').default

const code = 'const a = 1'

// 解析成 AST
const ast = babelParser.parse(code)

// 遍历、更新节点
babelTraverse(ast, {
  enter(path) {
    console.log(path)
  },
  Identifier(path) {
    // 将标识符 a 转换为 b
    if (path.node.name === 'a') {
      path.node.name = 'b'
    }
  }
})

// 重新生成代码
const newCode = babelGenerator(ast, {}, code)

console.log(newCode.code)
```

上述代码中遍历的 `enter` 方法，访问每个节点的时候都会执行。而 `Identifier` 只有访问到标识符时，比如代码里的 `a`，才会执行。

因为 `AST` 也是一个对象，所以可以直接修改对象属性值来对 `AST` 进行修改，比如上面的 `path.node.name = 'b'`。

修改完成之后通过 `@babel/generator` 将修改过后的 `AST` 生成代码。可以看见控制台输出了 `const b = 1`，标识符 `a` 成功修改为 `b`。

### 总结

经过上面的实践、分析也能了解 `Babel` 的基本原理了，它是基于 `AST`，通过下面步骤来实现各种功能。

1. `Parse`（解析），将代码解析成 `AST`，解析阶段又分成词法分析和语法分析两个阶段。
2. `Transform`（转换），遍历、访问 `AST`，对其进行修改。
3. `Generate`（生成），将修改过后的 `AST` 转换、生成为代码。

## 参考

1. [How JavaScript works: Parsing, Abstract Syntax Trees (ASTs) + 5 tips on how to minimize parse time](https://blog.sessionstack.com/how-javascript-works-parsing-abstract-syntax-trees-asts-5-tips-on-how-to-minimize-parse-time-abfcf7e8a0c8)
2. [Abstract syntax tree](https://en.wikipedia.org/wiki/Abstract_syntax_tree)
3. [Babel 是如何读懂 JS 代码的](https://zhuanlan.zhihu.com/p/27289600)
4. [AST for JavaScript developers](https://itnext.io/ast-for-javascript-developers-3e79aeb08343)
5. [What is JavaScript AST, how to play with it?](https://stackoverflow.com/a/66194129/7627744)
6. [Babel Plugin Handbook](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/plugin-handbook.md)
