# 如何写一个webpack插件

最近工作中有这么一个需求，需要将webpack最终构建出来的**文件目录+文件名**注入到指定的chunk或者模板文件中。

说到这里会想起一个我们很熟悉的webpack插件[html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)，这个插件可以将最终构建的chunk文件路径+文件名注入到html文件中。与开头提到的需求类似，只不过一个是注入到html文件，一个是注入到js文件。

在找了一圈没有能满足需求的插件之后，决定自己写一个。

## 一个webpack插件的基本组成

从官方文档[Writing a Plugin](https://webpack.js.org/contribute/writing-a-plugin/)中，可以知道，插件主要由以下部分组成：

1. 一个JavaScript命名函数或者一个类。

2. 在插件函数的 prototype 或者类上定义一个 apply 方法。

3. 指定一个绑定到 webpack 自身的[事件钩子](https://webpack.js.org/api/compiler-hooks/)。

4. 处理 webpack 内部实例的特定数据。

5. 功能完成后调用 webpack 提供的回调。
