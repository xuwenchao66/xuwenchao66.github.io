# Babel 插件开发入门

`Babel` 是一个**通用**的 `JavaScript` 编译器，它可以将源码转换成源码，不同的具体功能由不同的插件来实现，比如 [@babel/plugin-transform-runtime](https://babeljs.io/docs/en/babel-plugin-transform-runtime) 以及 `UI` 库中将代码转换成按需引用的 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)。

下面将介绍如何写一个 `Babel` 插件，以及开发前的一些前置知识要点。

因为 `Babel` 是基于 `AST` 的，所以这里推荐阅读 [AST 与 Babel](/blogs/ast-and-babel.html)，先了解什么是 `AST` 。

## Babel 基本原理

`Babel` 本身就是一基于 `AST` 的编译器，其工作主要分为以下 3 个阶段。

1. `Parse`（解析），将代码解析成 `AST`，解析阶段又分成以下两个阶段。
   - 词法分析（Lexical Analysis）。
   - 语法分析（Syntactic Analysis）。
2. `Transform`（转换），遍历、访问 `AST`，对其进行修改。
3. `Generate`（生成），将修改过后的 `AST` 转换、生成代码。

## Babel 插件开发常用工具链

### [@babel/parser](https://babeljs.io/docs/en/babel-parser.html)

可以将代码转换成 `Babel` 规范的 `AST`。

### [@babel/traverse](https://babeljs.io/docs/en/babel-traverse.html)

用于遍历、访问和修改 `AST`。

### [@babel/types](https://babeljs.io/docs/en/babel-types.html)

`AST` 可以是一个 `JavaScript` 对象，所以判断、修改节点可以是下面这样。

```js
traverse(ast, {
  enter(path) {
    if (path.node.type === 'Identifier' && path.node.name === 'n') {
      path.node.name = 'x'
    }
  }
})
```

然而，遵循 `DRY` 原则，自然有了 `@babel/types`，里面有许多方法能够构建、校验、转换 `AST` 节点，帮助我们更加简便地操作 `AST`。有了它上面的代码就可以简化为下方代码。

```js
traverse(ast, {
  enter(path) {
    if (t.isIdentifier(path.node, { name: 'n' })) {
      path.node.name = 'x'
    }
  }
})
```

### [@babel/generator](https://babeljs.io/docs/en/babel-generator.html)

可以将 `AST` 转换、生成为代码。

### [@babel/template](https://babeljs.io/docs/en/babel-template.html)

`AST` 是一个比较复杂的对象，如果要手动生成这个巨大的 `AST` 那将是一个苦力活。

`@babel/template`，能让我们通过更简单、熟悉的写代码字符串的方式来生成 `AST`，并且支持字符串模版。

```js
import template from '@babel/template'
import generate from '@babel/generator'
import * as t from '@babel/types'

const buildRequire = template(`
  var IMPORT_NAME = require(SOURCE);
`)

const ast = buildRequire({
  IMPORT_NAME: t.identifier('myModule'),
  SOURCE: t.stringLiteral('my-module')
})

console.log(generate(ast).code)
```

## 编写一个 Babel 插件

下面写一个插件将代码里的 `console.log` 调用删除。

### 插件基本骨架

从 [writing-your-first-babel-plugin](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/plugin-handbook.md#writing-your-first-babel-plugin) 可知，插件可以是下方这么一个函数。

```js
export default function(babel) {
  return {
    visitor: {
      Identifier(path, state) {},
      Function(path, state) {}
    }
  }
}
```

函数传入了 [babel](https://github.com/babel/babel/tree/master/packages/babel-core) 对象，里面也包含了一些常用的对象、方法，比如可用于判断节点类型的 `babel.types`。

该函数会返回一个 `visitor` 对象，该对象的属性方法，在 `Babel` 执行时就会调用 `visitor` 里面对应的方法，并传入当前路径信息 `path` 和状态 `state`，`state` 中可以拿到调用插件时的参数。

因为要删除 `console.log` 的方法调用，所以我们在 `visitor` 中指定访问调用表达式 [CallExpression](https://babeljs.io/docs/en/babel-types#callexpression)。更多的 `AST` 节点类型可从 [@babel/types](https://babeljs.io/docs/en/babel-types) 中查看。

新建 `src/index.js`，插件基本代码骨架如下。

```js
module.exports = function(babel) {
  return {
    visitor: {
      CallExpression(path, state) {
        console.log(path)
      }
    }
  }
}
```

### 测试驱动开发

接触过单元测试的同学可能能够想到可以使用 [@babel/core](https://github.com/babel/babel/tree/master/packages/babel-core) 的 `API` 方法调用目标插件，然后对经过 `Babel` 转换的 `AST` 或代码输出、使用 `jest` 等工具来完成单元测试。

但官方给出了更加简单的专门用于测试 `Babel` 插件的 `package`，[babel-plugin-tester](https://github.com/kentcdodds/babel-plugin-tester)。

- 安装依赖。

  ```sh
  npm install --save-dev jest @babel/core babel-plugin-tester
  ```

- 编写单元测试。

  新建 `__tests__/index.spec.js`。下方 `case` 表示期望把源码 `source` 经过编译后转换为删了 `console.log` 调用的代码。

  `babel-plugin-tester` 的详细用法请看 [https://github.com/kentcdodds/babel-plugin-tester](https://github.com/kentcdodds/babel-plugin-tester)。

  ```js
  const pluginTester = require('babel-plugin-tester').default
  const plugin = require('../src/index')

  const source = `
   const a = 123;
   console.log(a)
   alert(123)
  `

  const expect = `
   const a = 123;
   alert(123)
  `

  pluginTester({
    plugin,
    pluginName: 'remove console',
    tests: [
      {
        code: source,
        output: expect
      }
    ]
  })
  ```

- 添加 `npm script`

  ```json
  "scripts": {
    "test": "jest"
  }
  ```

配置完成后执行 `npm test` 可以看见单元测试运行起来，并且上方的 `case` 不通过。

### 完善插件逻辑

下方相关代码可以从 [https://github.com/xuwenchao66/babel-plugin-development](https://github.com/xuwenchao66/babel-plugin-development) 中进行查阅。

单元测试配置完成之后，我们开始补充插件逻辑，目标是通过单测的 `case`。

因为 `AST` 的节点 `node` 就是一个对象，所以可以像访问一个对象一样访问 `node` 的属性。

`AST` 的属性多且复杂，那么可以在 [https://astexplorer.net/](https://astexplorer.net/) 上先看看所需要操作的 `AST` 的节点大概长什么样，或者参考一些已有的插件源码，配合断点调试，这样在插件开发初期的才不会太盲目。

了解到了 `node` 节点有一个 `callee` 属性表示调用者，`callee.object` 就是调用方法的所属对象， `callee.property` 就是调用的属性方法。所以我们可以使用下方的条件判断来找出 `console.log` 调用，最后通过 `path.remove` 来将该 `node` 删除。

```js
module.exports = function(babel) {
  return {
    visitor: {
      CallExpression(path) {
        const { callee } = path.node
        if (
          callee.object &&
          callee.property &&
          callee.object.name === 'console' &&
          callee.property.name === 'log'
        ) {
          path.remove()
        }
      }
    }
  }
}
```

再次执行 `npm test`，单元测试通过。

像上面的 `node` 类型判断，`Babel` 也是提供了一些实用的工具来帮我我们快速开发。无论是 `console` 还是 `log` 都属于标识符（`Identifier`），所以可以用 [@babel/types](https://babeljs.io/docs/en/babel-types)
的 `isIdentifier` 方法来简化验证 `node` 的代码。

代码可以调整为。

```js
module.exports = function({ types: t }) {
  return {
    visitor: {
      CallExpression(path) {
        const { callee } = path.node
        if (
          t.isIdentifier(callee.object, { name: 'console' }) &&
          t.isIdentifier(callee.property, { name: 'log' })
        ) {
          path.remove()
        }
      }
    }
  }
}
```

本文相关的代码只是希望起到抛砖引玉的作用，简述一个插件的开发基本流程而已。

如果想要了解更多 `Babel` 插件开发的相关信息，推荐阅读 [Babel Plugin Handbook](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/plugin-handbook.md)，这里有更详细的介绍，包括了插件的基本实现以及最佳实践推荐。

## 参考

1. [Babel Plugin Handbook](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/plugin-handbook.md)
