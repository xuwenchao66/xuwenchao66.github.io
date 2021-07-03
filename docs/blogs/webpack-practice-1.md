# webpack 实践(1): 使用 loader

在日常开发中，我们更多的是使用 `vue` 模版文件来进行开发，所以新建 `App.vue`。

当然如果要开发其它应用，比如 `react`，整体套路也是差不多的，就是要换成对应的 `loader` 或其它解析方案，让 `webpack` 能够识别不同技术栈的语法、文件。

## 创建、引入模版文件

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

## 添加 loader & compiler

为了让 `webpack` 能识别出 `.vue` 文件，需要添加对应的 `loader`。

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
    path: resolvePath('app', 'dist')
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
      template: resolvePath('app', 'index.html')
    }),
    new VueLoaderPlugin()
  ]
}
```

再次执行构建，`webpack` 成功读取、编译 `.vue` 文件。

本文实践代码可从[https://github.com/xuwenchao66/webpack-practice](https://github.com/xuwenchao66/webpack-practice)中查阅。

## 参考

1. [webpack development guides](https://webpack.js.org/guides/development/)
2. [webpack production guides](https://webpack.js.org/guides/production/)
