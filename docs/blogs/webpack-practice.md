# webpack 实践应用

在[webpack 入门](/blogs/webpack-introduction.html)一文中我们已经对 webpack 有一个基本的了解了，下面将从零开始一步步搭建一个基于`webpack5` 和 `vue3`的应用开发、生产环境。

当然如果要开发其它应用，比如 `react`，整体套路也是差不多的，就是要换成对应的 `loader` 或添加 `plugins` 让 webpack 能够识别不同技术栈的语法、文件。

下方实践代码可从[https://github.com/xuwenchao66/webpack-practice](https://github.com/xuwenchao66/webpack-practice)中查阅。

## 项目初始化

为了方便对本系列博客相关实践代码进行分类，此次实践相关代码均在`app`目录中。

### 安装相关依赖

```sh
npm install webpack webpack-cli --save-dev
```

```sh
npm install vue@next
```

### 添加入口 html 文件

当用户访问 web 应用时，其实也就是访问服务端返回 `html` ，所以下面添加一个 `index.html` 作为应用入口。

文件内容如下。`body` 中有一个 `id="app"` 的 `div` 也就是用于挂载 `vue` 应用的根节点。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>webpack-build-app</title>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
```

### 添加入口 js 文件

`index.js` 内容如下。

```js
import { createApp, h } from 'vue'
const app = createApp({
  render() {
    return h('h1', this.content)
  },
  data() {
    return {
      content: 'Hello webpack & vue.'
    }
  }
})
app.mount('#app')
```

## 添加基础配置

在[webpack 入门](/blogs/webpack-introduction.html)中了解到，webpack 默认不能识别 `html` 文件，现在是需要将指定的 `js` 文件构建后自动绑定注入到指定的 `html` 中。

所以需要通过[html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)插件来实现。

### 安装 html-webpack-plugin

```sh
npm i --save-dev html-webpack-plugin
```

### 添加 `webpack.config.js`

```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const resolvePath = (...args) => path.resolve(process.cwd(), ...args)

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'main.js',
    path: resolvePath('app/dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolvePath('app/index.html')
    })
  ]
}
```

配置中除了指定了 `entry` 、 `output` 之外，还使用了 `HtmlWebpackPlugin`，插件的 `template` 选项用来告诉 `HtmlWebpackPlugin` 该使用哪个 `html` 模版文件来生成 bundle html。

`HtmlWebpackPlugin` 的更多用法可查看[html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)。

### 添加 npm scripts 构建命令

修改 `package.json`，添加如下 `build:app` 命令。

```json
"scripts": {
  ...,
  "build:app": "webpack --config app/webpack.config.js"
},
```

执行 `npm run build:app`，可以看到生成的 `dist` 目录中输出了 `html` 文件，在浏览器打开该文件，可看见浏览器渲染了 `h1` 标题，内容为 `Hello webpack & vue.`，至此基础配置完成。

## 使用 vue 模板文件

### 创建、引入模版文件

在日常开发中，我们更多的是使用 `vue` 模版文件来进行开发，所以新建 `App.vue`。

```vue
<template>
  <h1>{{ content }}</h1>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      content: 'Hello webpack & vue.'
    }
  }
}
</script>
```

修改 `index.js`。

```js
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
```

### 添加 loader & compiler

为了能让 webpack 识别出 `.vue` 文件，需要添加对应的 `loader`。

在 `vue2.x` 中使用的是 `vue-loader` 和 `vue-template-compiler`，而在 `vue3` 中要分别改用 `vue-loader@next` 和 `@vue/compiler-sfc`。

- 安装依赖

```sh
npm install -D vue-loader@next @vue/compiler-sfc
```

- 修改 `webpack.config.js`。

```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const resolvePath = (...args) => path.resolve(process.cwd(), ...args)

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'main.js',
    path: resolvePath('app/dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolvePath('app/index.html')
    }),
    new VueLoaderPlugin()
  ]
}
```

再次执行构建，webpack 成功读取、编译 `.vue` 文件。

## 使用 DevServer

在上面的测试中，我们每次修改代码都要手动构建，效率较低下。可以使用 [webpack-dev-server](https://webpack.js.org/configuration/dev-server/) 来自动化、加速这一过程。

`webpack-dev-server` 能够监听文件改变，然后自动执行构建、刷新页面，支持热更新，而且它启动后是将构建结果保存在内存中，所以读取速度更快。

### 安装相关依赖

```sh
npm i npm install --save-dev webpack-dev-server webpack-merge -D
```

### 拆分配置文件

加入了 `DevServer` 之后，会发现配置中生产环境与开发环境有不少不同点，比如开发环境中需要添加便于调试的 `source-map`，`devServer` 配置等等，而生产环境需要对 bundle 进行压缩、构建优化。

所以为了将两者区分，便于维护、复用。下面将配置文件拆分为以下三个 js 文件，都放在新建的 `build` 目录下，然后通过 [webpack-merge](https://github.com/survivejs/webpack-merge) 来组合它们。

`build` 目录下新建 `utils.js`，用来存放通用的脚本辅助方法，如下。

```js
const path = require('path')
const resolvePath = (...args) => path.resolve(process.cwd(), ...args)

module.exports = {
  resolvePath
}
```

- `webpack.common.js`：导出通用、可复用的配置。

  ```js
  const HtmlWebpackPlugin = require('html-webpack-plugin')
  const { resolvePath } = require('./utils')
  const { VueLoaderPlugin } = require('vue-loader')

  module.exports = {
    entry: './app/index.js',
    output: {
      filename: 'main.js',
      path: resolvePath('app/dist')
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: resolvePath('app/index.html')
      }),
      new VueLoaderPlugin()
    ]
  }
  ```

- `webpack.prod.js`：导出生产环境配置。

  ```js
  const { merge } = require('webpack-merge')
  const base = require('./webpack.common')

  module.exports = merge(base, {
    mode: 'production'
  })
  ```

- `webpack.dev.js`：导出开发环境的配置。

  ```js
  const { merge } = require('webpack-merge')
  const { resolvePath } = require('./utils')
  const base = require('./webpack.common')

  module.exports = merge(base, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      contentBase: resolvePath('dist'),
      hot: true,
      compress: true,
      port: 3000
    }
  })
  ```

  - `devtool`：用于决定如何生成 `source maps`，为了方便调试，在开发环境中一般都会开启。
  - `devServer`： 该选项决定了 `webpack-dev-server` 的表现。

    - `contentBase`：静态服务端根目录。
    - `hot`：是否启用热更新。
    - `compress`：是否启用 `gzip` 压缩服务器响应的静态资源。
    - `port`：静态服务器的监听端口。

    更多选项请看[webpack dev-server](https://webpack.js.org/configuration/dev-server)

### 调整 npm scripts

```json
"scripts": {
  ...,
  "build:app": "webpack --config app/build/webpack.prod.js",
  "dev:app": "webpack serve --config app/build/webpack.dev.js"
}
```

配置成功后执行 `npm run dev:app`，启动 `DevServer`，浏览器访问 `http://localhost:3000/`，可访问应用，而且修改代码，页面会进行热更新。

## 参考

1. [webpack development guides](https://webpack.js.org/guides/development/)
2. [webpack production guides](https://webpack.js.org/guides/production/)
