# webpack plugin 开发入门

本文相关实践代码可从[https://github.com/xuwenchao66/webpack-plugin-practice](https://github.com/xuwenchao66/webpack-plugin-practice)中查阅。

下面要介绍的就是除了 `loader` 之外，在 `webpack` 中另一个常用的组成部分 `plugin`。

要了解 `plugin`，那么就从 `plugin` 与 `loader` 的区别开始讲起。

- 从 [webpack loader 开发入门](/blogs/webpack-write-a-plugin.html) 中我们了解到了 `loader` 主要用来将文件**转换**成 `webpack` 所能识别的**模块**。
- 而 `plugin` 则是对能够对 `webpack` 进行**功能扩展**，比如代码压缩、注入环境变量等等。通过 `plugin` 我们能够在 `webpack` 构建过程中引入自定义的功能、行为。

## plugin 基本组成

1. `plugin` 就是一个类，在 `JavaScript` 中可以是一个命名了的 `function` 或 `class`。
2. 类的原型对象 `prototype` 中应该有 `apply` 这个方法。`webpack` 启动构建时会调用该方法，并且将当前的 `compiler` 对象回传到 `plugin` 中。
3. 在合适的 [事件钩子](https://webpack.js.org/api/compiler-hooks/) 中绑定、插入自定义函数。
4. 在自定义函数中操作 `webpack` 的内部实例、数据。
5. 自定义操作完成之后，调用 `webpack` 提供的回调函数。

所以一个插件可以是下面这样。

```js
// A JavaScript class.
class MyExampleWebpackPlugin {
  // Define `apply` as its prototype method which is supplied with compiler as its argument
  apply(compiler) {
    // Specify the event hook to attach to
    compiler.hooks.emit.tapAsync(
      'MyExampleWebpackPlugin',
      (compilation, callback) => {
        console.log('This is an example plugin!')
        console.log(
          'Here’s the `compilation` object which represents a single build of assets:',
          compilation
        )

        // Manipulate the build using the plugin API provided by webpack
        compilation.addModule(/* ... */)

        callback()
      }
    )
  }
}
```

## Compiler & Compilation

在上面的例子中，我们看到了 `compiler` 和 `compilation` 这两个变量，它们是在开发 `plugin` 中最重要的两个对象，所以在开发 `plugin` 之前，必须先简单了解它们的角色。

### Compiler

[compiler](https://webpack.js.org/api/node/#compiler-instance)，可以理解为每当启动一次 `webpack` 构建都会创建的对应的 `compiler` （编译器）实例对象。所以在这个对象中能够拿到 `webpack` 的相关配置，比如 `entry`、`loader`、`plugins` 等等。

### Compilation

[compilation](https://webpack.js.org/api/compilation-hooks/) 可以理解为 `compiler` 每次构建执行都会生成的一个对象，该对象含有本次构建的资源及其相关信息。

在 `compilation` 阶段中，`modules`（模块）会经过 `loaded`, `sealed`, `optimized`, `chunked`, `hashed`，`restored`等。

## 事件挂载与 tapable

`compiler` 和 `compilation` 等与 `webpack` 相关的对象都是一个 [Tapable](https://webpack.js.org/api/plugins/#tapable) 的实例。

`Tapable` 类暴露出了 `tap`、`tapAsync`、`tapPromise` 等方法，让 `plugin` 能够通过这些方法在 `webpack` 的不同钩子函数中插入自定义的构建步骤、流程。

比如 `compiler.hooks.emit.tapAsync`，表示在 `compiler` 的 [emit hook](https://webpack.js.org/api/compiler-hooks/#emit) 中插入一个异步执行函数。

从 [compiler-hooks](https://webpack.js.org/api/compiler-hooks/) 和 [compilation-hooks](https://webpack.js.org/api/compilation-hooks/) 中可以查看更多 `hooks` 详情。

## 编写插件

在简单了解了必要的 `plugin` 相关知识之后，下面尝试编写一个简单的 `plugin`。

### 需求

在项目构建成功后，需要将本次构建生成的相关资源信息（文件名、大小等等）格式化地输出在指定的文件之中，方便对构建结果进行追溯、统计。

### 搭建插件骨架

`plugin` 都需要一个标识，所以这里定义了一个 `pluginName`，以及必备的 `apply` 方法。

我们的需求是在构建**结束之后**生成资源信息文件，在翻阅 [compiler-hooks](https://webpack.js.org/api/compiler-hooks/) 发现了 [done](https://webpack.js.org/api/compiler-hooks/#done) 这个钩子，`done` 会在此次构建成功后执行，符合我们的需求，加之插件没有异步操作，所以我们通过 `tap` 方法将插件逻辑插入到 `done` 钩子中。

```js
const pluginName = 'AssetsReportPlugin'

class AssetsReportPlugin {
  apply(compiler) {
    compiler.hooks.done.tap(pluginName, (compilation) => {
      console.log(pluginName, 'running.')
    })
  }
}

module.exports = { AssetsReportPlugin }
```

在构建引入插件 `AssetsReportPlugin`，执行构建发现控制台输出了 `AssetsReportPlugin running.` 说明 `plugin` 调用成功。

```js
...,
const { AssetsReportPlugin } = require('../src/index')

module.exports = {
  ...,
  plugins: [new AssetsReportPlugin()]
}
```

### 完善插件逻辑

- 获取本次构建输出相关信息。

  关于这点 `webpack` 官方没有太详细的介绍，因为参数、属性实在太多了。`webpack` 也在官网中指出写 `plugin` 就要做好阅读源码的准备。这里推荐通过打断点，或者查阅一些功能相似的成熟的插件源码比如 [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) 来了解相关参数。通过断点查看对象可以发现通过 `stats.compilation.assets`对象可以获取本次构建的相关信息。

- 参数设计。

  这里也尽量保持与 `webpack output` 的参数一致，在实例化插件的时候可以传入 `path`、`filename` 参数，来决定文件输出目录以及文件名。如果没有传入就会使用默认参数。

  ```js
  ...,
  const resolve = (...args) => path.resolve(process.cwd(), ...args)
  const { AssetsReportPlugin } = require('../src/index')

  module.exports = {
    ...,
    plugins: [
      ...,
      new AssetsReportPlugin({
        path: resolve('example/dist/report'),
        filename: 'files.md'
      })
    ]
  }
  ```

完善后的代码如下。

```js
const fs = require('fs-extra')
const path = require('path')
// 插件名
const pluginName = 'AssetsReportPlugin'
// 默认参数
const defaultOptions = {
  filename: 'assets.md'
}
// 文本头部
const tableHeader = `
# assets table

| file   | size   |
| ------ | ------ |
`

class AssetsReportPlugin {
  constructor(options) {
    // 合并参数
    this.options = { ...defaultOptions, ...options }
  }
  apply(compiler) {
    compiler.hooks.done.tap(pluginName, (stats) => {
      const { assets, outputOptions } = stats.compilation
      // 拼接文本
      const content = Object.keys(assets).reduce((acc, key) => {
        acc += `| ${key} | ${assets[key]._size} |\n`
        return acc
      }, tableHeader)
      // 获取输出路径，如没传入，则使用 webpack 的 output.path
      const outputPath = this.options.path || outputOptions.path
      // 输出文件
      fs.outputFile(path.resolve(outputPath, this.options.filename), content)
    })
  }
}

module.exports = { AssetsReportPlugin }
```

执行构建，可以看见在目标目录成功输出了包含构建信息的 `md` 文件。

## 参数校验

为了能够让使用者在参数传入错误时给出准确的错误提示，这里使用官方推荐的 [schema-utils](https://github.com/webpack/schema-utils) 来对传入的 `options` 进行检验。

- 安装依赖。

  ```sh
  npm install schema-utils --save
  ```

- 添加检验规则描述文件 `/src/schema.json`。

  ```json
  {
    "type": "object",
    "properties": {
      "path": {
        "type": "string",
        "absolutePath": true
      },
      "filename": {
        "type": "string"
      }
    },
    "additionalProperties": false
  }
  ```

  `schema-utils` 的用法具体可查看 [schema-utils 文档](https://github.com/webpack/schema-utils) 说明，官方 `README` 没有并没有太详细的指南，那么也可以从其 [单元测试用例 schema.json](https://github.com/webpack/schema-utils/blob/master/test/fixtures/schema.json) 中查看、参考更多不同的用法。

- 调用校验方法。

  修改插件。

  ```js
  ...,
  const { validate } = require('schema-utils')
  const schema = require('./schema.json')
  // 插件名
  const pluginName = 'AssetsReportPlugin'
  ...,

  class AssetsReportPlugin {
    constructor(options) {
      // 校验参数
      validate(schema, options, { name: pluginName })
      // 合并参数
      this.options = { ...defaultOptions, ...options }
    }
    ...,
  }

  module.exports = { AssetsReportPlugin }
  ```

配置完成之后，尝试传入不合法的 `options`，再次执行构建，可以看见控制台报错，并且输出了可读性较高的错误提示。

## 参考

1. [webpack writing-a-plugin](https://webpack.js.org/contribute/writing-a-plugin/)
2. [webpack compiler-instance](https://webpack.js.org/api/node/#compiler-instance)
3. [webpack compilation](https://webpack.js.org/api/compilation-hooks/)
4. [webpack plugins api](https://webpack.js.org/api/plugins/)
