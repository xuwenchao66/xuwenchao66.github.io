# 如何发布一个 npm 包

## npm 账号

要在 npm 上发布自己的 package，那么就必须先有自己的账号，打开[https://www.npmjs.com/](https://www.npmjs.com/)进行注册、登陆。

## 本地登陆

因为发布操作是在自己的机器上进行的，所以需要确保发布环境已进行 npm 账号登陆。

打开终端，执行`npm config get registry`，查看当前的源，`npm config get`用于查看当前的 npm 配置。因为国内的网络问题，我们经常会切换至淘宝等国内的镜像源，但是接下来是要在 npm 官方发布一个 package，所以需要保证当前的 registry 为 https://registry.npmjs.org/ 。

确保 registry 正确之后执行`npm login`，按要求你输入用户名、密码、邮箱，用于登陆验证。

执行`npm whoami`查看当前的已登陆用户，如果出现了自己的用户名，说明登陆成功。

## 实现一个简单的 package

### 初始化项目

新建一个目录用于保存、维护将要发布的 package，在目录中执行`npm init`初始化一个 npm 项目，package name 要注意不要与已有的 package 重名，因为 npm 不允许有两个相同、相似名称的 package。

初始化成功之后，可以看见目录中多了一个 package.json 文件。

### package.json 简单解读

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

- name，package 的名字。
- version，package 的版本。
- description，package 的简单描述。
- main，package 的主入口文件，当使用者 import 你的 package 的时候，就是从这个入口文件 import。
- scripts，自定义的 npm 脚本命令。
- author，作者。
- license，软件许可证类型。

关于 package.json 的更多字段含义，可从[https://docs.npmjs.com/cli/v6/configuring-npm/package-json](https://docs.npmjs.com/cli/v6/configuring-npm/package-json)中查看。

### package 主文件

在目录中创建一个 index.js 脚本，脚本会内容如下。

```js
console.log('hello npm')
```

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
