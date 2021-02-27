# 如何写一个webpack插件

最近工作中有这么一个需求，需要将webpack最终构建出来的**文件目录名+文件名**注入到指定的chunk或者模板文件中。

说到这里会想起一个我们很熟悉的webpack插件[html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)，这个插件可以将最终构建的chunk文件目录名+文件名注入到html文件中。与开头提到的需求类似，只不过一个是注入到html文件，一个是注入到js文件。

在找了一圈没有能满足需求的插件之后，决定自己写一个。

## webpack插件的基本组成、工作方式

### 基本结构

从官方文档[Writing a Plugin](https://webpack.js.org/contribute/writing-a-plugin/)中，可以知道，插件是一个可**实例化的对象，该对象原型中拥有apply方法**。

主要由以下部分组成：

1. 一个JavaScript命名函数或者一个类。

2. 在插件函数的 prototype 或者类上定义一个 apply 方法。

3. 指定一个绑定到 webpack 自身的[事件钩子](https://webpack.js.org/api/compiler-hooks/)。

4. 处理 webpack 内部实例的特定数据。

5. 功能完成后调用 webpack 提供的回调。

```js
// 1. 一个JavaScript命名函数或者一个类。
class MyExampleWebpackPlugin {
  // 2. 在插件函数的 prototype 或者类上定义一个 apply 方法。
  apply(compiler) {
    // 3. 指定一个绑定到 webpack 自身的事件钩子
    compiler.hooks.emit.tapAsync(
      'MyExampleWebpackPlugin',
      (compilation, callback) => {
        console.log('This is an example plugin!');
        console.log('Here’s the `compilation` object which represents a single build of assets:', compilation);
        // 4.处理 webpack 内部实例的特定数据
        compilation.addModule(/* ... */);
        // 5.功能完成后调用 webpack 提供的回调
        callback();
      }
    );
  }
}
```

### Compiler对象

在插件模板中可以看到在插件的`apply`方法中可以获取到`compiler`对象，该对象可以理解为每当启动一次`webpack`都会创建一次的编译器对象。

在该对象中我们可以拿到运行时`webpack`的配置、环境，比如`webpack`配置中的`entry`、`loader`、`plugins`等等。

[Compiler的hooks](https://webpack.js.org/api/compiler-hooks/)

### Compilation对象

在插件模板中可以看到从`compiler`hooks钩子函数中可以获取到`compilation`对象，`compilation`就跟字面意思一样，可理解为`compiler`的一次构建行为、资源。
比如在`webpack`开发模式中，每一次文件变化，`compiler`都会创建一次`compilation`。

[Compilation的hooks](https://webpack.js.org/api/compilation-hooks/)

### 挂载事件

[Tapable](https://github.com/webpack/tapable)是一个暴露了许多钩子函数的类，因为`compiler`和`compilation`都是一个`Tapable`的实例，
所以插件中能够通过`Tapable`的方法在`webpack`暴露出来的钩子函数中挂载插件自定义的函数。

比如插件模板中的`compiler.hooks.emit.tapAsync`，表示插件在`compiler`的`emit`（生成资源到 output 目录之前）钩子函数中挂载了一个异步函数。
插件的主要功能都在这个函数中完成，比如改变输出的源文件等。

## 分析需求，完成插件

### 确定插件api

从平时使用插件的方式，以及官方指导中可知，插件是一个可实例化的对象。

```js
module.exports = {
  ...
  plugins: [new InjectChunkFilenamePlugin(options)]
  ...
}
```

插件肯定是能够满足多种不同场景的使用，这可以通过在实例化插件的时候传参决定插件的工作方式。

现在要从使用者的角度考虑这个插件的api应该是怎样的。

需求是**将一个chunk B的`Asset`注入到另一个chunk A中**，那到底是注入到chunk A文件中的哪个位置呢？当然这个是交给使用者决定。
所以使用者需要在chunk A中输入一段特殊字符串作为占位符，然后插件会在运行过程中通过正则匹配将这占位符替换为chunk B的`Asset`名。

参数`options`应该是一个数组，这样才能支持多组不同的配置。`options`中的元素是一个对象，有`targetChunk`属性标记待注入的目标chunk，
`rules`是一个数组，因为有可能需要将多个不同chunk的`Asset`注入到目标chunk中。`rules`中的元素是一个对象，该对象有两个属性，一个是
`regex`是一个正则，用于匹配目标替换目标chunk的占位符，一个是`injectChunk`也就是需要注入的chunk。


```js
new InjectChunkFilenamePlugin([
  {
    targetChunk: 'app',
    rules: [{
      regex: /inject-tag-lib/,
      injectChunk: 'lib'
    }]
  }
])
```

### 完成插件基本结构

1. 保存`options`参数，以便在apply方法中获通过`this.options`读取使用。

```js
const PluginName = 'WebpackInjectChunkFilenamePlugin' // 插件名称，必须是独一无二的

class Plugin {
  constructor(options) {
    this.options = options
  }
  apply(compiler) {}
}
```

2. 在适当的`webpack`钩子函数中挂载插件主函数。

经过上面的需求分析，可以知道需要在**生成资源到目录之前**改变输出的资源，所以我们应该访问[emit](https://webpack.js.org/api/compiler-hooks/#emit)这个钩子函数。
因为这个插件里面的任务都是同步的，所以用同步钩子`tap`即可。

补充下`apply`方法。

```js

const PluginName = 'WebpackInjectChunkFilenamePlugin' // 插件名称，必须是独一无二的

class Plugin {
  constructor(options) {
    this.options = options
  }
  apply(compiler) {
    compiler.hooks.emit.tap(PluginName, (compilation) => {
      // 在这里完成插件的任务
    }
  }
}
```

3. 读取参数，对`compilation`对象进行修改。

翻了一遍文档，没发现哪里有对这方面做出详解的，所幸在此之前`webpack`就有无数的插件实现供我们参考。

因为这个插件与[html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)做的事情类似，
所以在[html-webpack-plugin的源码中](https://github.com/jantimon/html-webpack-plugin/blob/master/index.js)可以发现，
通过`compilation.assets`可以访问到本次编译输出的所有资源，通过以下方法可以改变输出资源，对应资源的`source`属性是一个函数，
这个函数返回的是最终输出的文本结果，`size`属性也是一个函数，返回的是文本的大小。

```js
compilation.assets[finalOutputName] = {
  source: () => html,
  size: () => html.length
}
```

在[webpack源码的Compilation.js](https://github.com/webpack/webpack/blob/master/lib/Compilation.js)中也可以找到我们想要的属性、方法等。

所以继续完善处理函数如下：

```js
class Plugin {
  apply(compiler) {
    compiler.hooks.emit.tap(PluginName, (compilation) => {
      // 遍历参数，处理每组规则
      this.options.forEach((option) => {
        const { targetChunk, rules } = option
        const { namedChunks } = compilation
        // 遍历注入规则,进行文本替换/创建
        rules.forEach((rule) => {
          const { regex, injectChunk } = rule
          // 通过namedChunks.get可获取到输出的asset名
          const injectChunkFilename = namedChunks.get(injectChunk).files[0]
          const filename = namedChunks.get(targetChunk).files[0]
          // 对目标chunk的输出文本进行字符串替换
          const content = compilation.assets[filename]
            .source()
            .replace(regex, injectChunkFilename)
          // 最终改变目标chunk的输出对象
          compilation.assets[filename] = {
            source: () => content,
            size: () => content.length
          }
        })
      })
    })
  }
}
```

4. 从应用层面，一个良好的应用除了要有完善的文档，还必须能够给用户及时、准确的错误反馈。

官方插件编写指导中，推荐插件使用[schema-utils](https://github.com/webpack/schema-utils)来对参数进行校验，错误提示。

补充参数校验后，插件就完成了。

```js
const schema = require('./schema.json')
const validate = require('schema-utils')
const PluginName = 'WebpackInjectChunkFilenamePlugin'

class Plugin {
  constructor(options) {
    validate(schema, options, { name: PluginName }) // 参数校验
    this.options = options
  }
  apply(compiler) {
    compiler.hooks.emit.tap(PluginName, (compilation) => {
      // 遍历参数，处理每组规则
      this.options.forEach((option) => {
        const { targetChunk, rules } = option
        const { namedChunks } = compilation
        // 遍历注入规则,进行文本替换/创建
        rules.forEach((rule) => {
          const { regex, injectChunk } = rule
          // 通过namedChunks.get可获取到输出的asset名
          const injectChunkFilename = namedChunks.get(injectChunk).files[0]
          const filename = namedChunks.get(targetChunk).files[0]
          // 对目标chunk的输出文本进行字符串替换
          const content = compilation.assets[filename]
            .source()
            .replace(regex, injectChunkFilename)
          // 最终改变目标chunk的输出对象
          compilation.assets[filename] = {
            source: () => content,
            size: () => content.length
          }
        })
      })
    })
  }
}

module.exports = Plugin
```

更多可参考[webpack-inject-chunk-filename-plugin](https://github.com/xuwenchao66/webpack-inject-chunk-filename-plugin)的完整源码

## 参考资源

1. [writing-a-plugin](https://webpack.js.org/contribute/writing-a-plugin/)
2. [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)
3. [webpack compilation.js](https://github.com/webpack/webpack/blob/master/lib/Compilation.js)
4. [Tapable](https://github.com/webpack/tapable)
