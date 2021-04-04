# webpack 实践(3): 加载静态资源

一个应用必然少不了使用各种图片等静态资源，在 `webpack5` 之前都是通过 [url-loader](https://github.com/webpack-contrib/url-loader) 和 [file-loader](https://github.com/webpack-contrib/file-loader) 来识别、载入静态资源。

`webpack5` 内置了 [Asset Modules](https://webpack.js.org/guides/asset-modules/)，通过 `Asset Modules` 无需配置额外的 `loader` 就能在 `webpack` 中使用静态资源。

下方实践代码可从[https://github.com/xuwenchao66/webpack-practice](https://github.com/xuwenchao66/webpack-practice)中查阅。

新增 `assets` 目录用来存在静态资源，在里面添加测试用的 `logo.png`。

修改 `App.vue`，引入图片。

```vue
<template>
  <div>
    <h1>{{ content }}</h1>
    <img :src="require('./assets/logo.png')" alt="logo" />
  </div>
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

修改 `webpack.common.js`，添加 `Asset Modules` 配置。

```js
...,
module.exports = {
  ...,
  module: {
    rules: [
      ...,
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset'
      }
    ]
  },
  ...,
}
```

再次执行 `build:app` 或 `dev:app`，图片载入成功。

## 参考

1. [webpack asset-modules](https://webpack.js.org/guides/asset-modules/)
