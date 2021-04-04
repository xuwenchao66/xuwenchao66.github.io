# webpack 实践(5): 使用 Babel

查看构建出来的脚本可发现，里面存在不少 `const` 等 `ES6+` 的语法糖，为了让代码能够在老旧的浏览器中正确运行，需要使用 `Babel` 来将代码编译成 `ES5` 以及添加 `polyfill`。

可从[Babel 实践应用](/blogs/babel-practice.html) 一文中了解了构建应用时的 `Babel` 推荐配置。

下方实践代码可从[https://github.com/xuwenchao66/webpack-practice](https://github.com/xuwenchao66/webpack-practice)中查阅。

## 使用 ES6+ 语法糖

修改 `App.vue`，新增了一个 `log` 函数，该函数使用了 `const` 、箭头函数。

```vue
<template>
  <div>
    <h1>{{ content }}</h1>
    <img :src="require('./assets/logo.png')" alt="logo" />
  </div>
</template>

<script>
const log = () => console.log('App')
export default {
  name: 'App',
  data() {
    return {
      content: 'Hello webpack & vue.'
    }
  },
  mounted() {
    this.log()
  },
  methods: {
    log
  }
}
</script>
```

## 安装相关依赖

```sh
npm install -D babel-loader @babel/core @babel/preset-env core-js@3
```

## 添加 Babel 配置文件 babel.config.json

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "usage",
        "corejs": "3"
      }
    ]
  ]
}
```

## 修改 webpack 通用配置 webpack.common.js

```js
...,
const appSourcePath = resolvePath('app')

module.exports = {
  ...,
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [appSourcePath],
        use: {
          loader: 'babel-loader'
        }
      },
      ...,
    ]
  },
  ...,
}
```

最后执行构建，查看输出脚本，新增的 `log` 函数都被编译成 `ES5` 的语法了。

## 参考

1. [babel-loader](https://webpack.js.org/loaders/babel-loader/)
