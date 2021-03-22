# 发布自己的 npm package

## npm 账号

要在 npm 上发布自己的 package，那么就必须先有自己的账号，打开[https://www.npmjs.com/](https://www.npmjs.com/)进行注册、登陆。

## 本地登陆

因为发布操作是在自己的机器上进行的，所以需要确保发布环境已进行 npm 账号登陆。

打开终端，执行`npm config get registry`，查看当前的源，`npm config get`用于查看当前的 npm 配置。因为国内的网络问题，我们经常会切换至淘宝等国内的镜像源，但是接下来是要在 npm 官方发布一个 package，所以需要保证当前的 registry 为 https://registry.npmjs.org/ 。

确保 registry 正确之后执行`npm login`，按要求你输入用户名、密码、邮箱，用于登陆验证。

执行`npm whoami`查看当前的已登陆用户，如果出现了自己的用户名，说明登陆成功。

## 初始化项目

新建一个目录用于保存、维护将要发布的 package，在目录中执行`npm init`初始化一个 npm 项目，package name 要注意不要与已有的 package 重名，因为 npm 不允许有两个相同、相似名称的 package。

初始化成功之后，可以看见目录中多了一个 package.json 文件。

在目录中创建一个 index.js ，文件内容如下。

```js
console.log('hello npm')
```

## package.json 字段解析

package.json 用于描述我们的 npm package 基本信息，打开 package.json ，可见如下内容。

```json
{
  "name": "test-publish-666",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "wenchaoxu",
  "license": "ISC"
}
```

- name： package 的名字。
- version：package 的版本。
- description：package 的简单描述。
- main：package 的主入口文件，当使用者 import 你的 package 的时候，就是从这个入口文件 import。
- scripts：自定义的 npm 脚本命令。
- author：作者。
- license：软件许可证类型。

### 其它常用字段

- module

  也是 package 的主入口文件。跟 main 有什么区别呢？

  module 用来声明 ES 模块规范的入口文件，因为 ES 模块支持静态分析，能够更好的 TreeShaking，所以 webpack 等构建工具会优先读取 module 字段，没有的话再去读取 main 字段。

  nodejs 的 require 只认得 main 字段，所以 main 一般用于声明 commonjs 模块规范的入口文件。

  所以在日常实践中，推荐 main、module 都声明，main 声明 commonjs 模块入口文件，module 声明 ES 模块入口文件。

- files

  很多时候我们的 package 可能有多个不同的入口文件，这时候即可用[files](https://docs.npmjs.com/cli/v6/configuring-npm/package-json#files)声明一个数组将多个文件包含进来。

  如下就会将当前目录的 src 文件夹中，以及 dist 下的 js 文件都包含为模块文件，在 package 安装之后，能够看见这些文件的存在。

  ```json
  "files": [
    "src",
    "dist/*.js",
  ],
  ```

- peerDependencies

  对于 devDependencies 和 dependencies 我们已经再熟悉不过了，但是 peerDependencies 呢？从[ant-design](https://github.com/ant-design/ant-design/blob/master/package.json)和[element](https://github.com/ElemeFE/element/blob/dev/package.json)两个主流组件库可见都有声明该字段。

  peerDependencies 可以理解为前置依赖，在使用我们的 package 的时候，需要安装 peerDependencies 里面要求的依赖。那跟 dependencies 有什么区别呢？

  声明为 dependencies 的依赖会随着我们的 package 安装而一起安装进来，而 peerDependencies 不会，如果没有安装 peerDependencies 里的依赖，npm install 的时候只会出现警告。

  那么为什么不直接用 dependencies？ 因为声明为 dependencies 的话，比如应用、和 package 的 react 依赖版本不同，那么就会导入两个同名但不同版本的 react，那么对于需要保证单例的依赖就会出现警告、报错、甚至运行错误。

  所以 peerDependencies 适合用于声明那些 package 的必须、但又需要保证整个应用中只有一个的依赖。

  如下会告诉应用使用方，在 install package 的时候，必须安装版本号大于或等于 16.9.0 的 react，否则会出现警告。

  ```json
  "peerDependencies": {
    "react": ">=16.9.0"
  }
  ```

关于 package.json 的更多字段含义，可从[https://docs.npmjs.com/cli/v6/configuring-npm/package-json](https://docs.npmjs.com/cli/v6/configuring-npm/package-json)中查看。

## 发布

### 初次发布

在准备好了我们的 package 相关文件之后，在当前目录中执行`npm publish`，稍等片刻即可见 package 发布成功。

在[https://www.npmjs.com/](https://www.npmjs.com/)中根据 package 名称查找，可看见刚发布的 package。这样就能够通过`npm i`来安装该 package 了。

### 更新发布

我们的 package 经常需要进行 bug 修复、新增 feature 等，所以需要更新发布新的 package。在本地修改代码之后，可以手动将 package.json 中等 version 版本号+1，然后再次执行`npm publish`发布新包。

当然 npm 也提供了命令`npm version`来避免手动对 version 进行修改。

从此处[npm-version](https://docs.npmjs.com/cli/v6/commands/npm-version)可查看 version 命令的更多参数解析。

比如执行`npm version patch`，就会将当前 version 从 1.0.0 改为 1.0.1，如当前目录为 git 仓库，那么还会打上 git tag 并进行 commit。

所以我们可以将发布命名合并为一个 script 命令，方便下次发布执行，如下。

```json
"scripts": {
  "publish-patch": "npm version patch && npm publish"
},
```

当执行`npm run publish-patch`的时候，补丁版本号自动+1，然后进行发布。
