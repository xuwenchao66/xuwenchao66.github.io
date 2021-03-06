# 规范项目的 Git Commit Message

每个项目少不了规范，然后作为记录项目发展的 Git 也应该规范化，规范的 commit message 便于我们记录、追溯问题，同时人机可读的规范也让项目自动化更简单，比如根据 commit message 自动生成 changelog 等等。

下面将介绍规范的 commit message，以及如何通过工具校验和高效生成满足规范的 commit message。

## 规范介绍

目前社区使用范围较广的是[AngularJS 团队的 commit message 规范](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines)。该 message 格式由 3 部分组成，分别是 header、body、footer。一个 commit message 基本格式如下。

```sh
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

### header

首行为 header，是必须存在的。header 由三部分组成，分别是：

1. type: 提交类型，必填。常用的有如下类型：

   - feat：新功能
   - fix：bug 修复
   - docs：文档修改
   - style: 不会修改代码运行逻辑的代码风格、格式改动（比如增、删加了空行、分号等等）
   - refactor：重构
   - perf：性能优化
   - test：添加、修改测试
   - chore：其它，比如项目的构建过程、辅助工具的调整（比如文档生成、release 及其方式）。

2. scope：影响范围，选填。
3. subject：主题，本次提交的简短描述，必填。

所以一个规范的 header 可如右方所示：`feat(src): add login page`。

### body

body 为本次修改详细描述，比如描述本次修改的动机以及与以往的不同对比，body 为选填。

### footer

footer 应该包含本次修改的 Breaking Changes 以及本次关闭了的 issues，footer 也为选填。

## 使用规范校验工具

 口头约定往往容易被打破，为此我们需要工具来让团队所有人都严格遵守规范，所以出现了 eslint 等代码校验工具。 当然 commit message 也有对应的校验工具。

### 安装校验工具

新建一个项目用于安装、测试。然后执行下方命令安装依赖。

```sh
npm install -g @commitlint/cli @commitlint/config-conventional
```

我们使用[@commitlint/cli](https://commitlint.js.org/)来校验 commit message，而[@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional)约定式提交规范，是校验工具所遵循规范。我们也可以选择社区中的[其它规范](https://github.com/conventional-changelog/commitlint#shared-configuration)，甚至自定义规范。

### 配置

unix 系统中可执行下方命令，生成 commitlint 的配置文件 commitlint.config.js。

```sh
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
```

或者可以选择手动新增配置文件 commitlint.config.js，该文件一般如下。

```js
module.exports = {
  extends: ['@commitlint/config-conventional']
}
```

`extends`：用于告诉校验工具应该继承使用哪个规范，这里使用了 @commitlint/config-conventional。

`ignores`：如果数组里面的函数返回 true，则会跳过检测。一些非人工的 commit，比如 merge 或者 CI 中的自动 commit，有时候我们并不期望对其进行检测，则可使用该参数。

更多配置项可查看[commitlint reference-configuration](https://commitlint.js.org/#/reference-configuration)。

### 测试

为了测试校验工具是否正确安装、配置，用 git 添加一个不规范的 commit message，比如 `test`。

然后执行`commitlint -e`触发 commitlint，`-e`参数用于校验最后一次的 commit message，执行命令后 terminal 出现如下错误，说明 message 有哪些点校验失败了。至此校验工具已安装、配置成功。

```sh
⧗   input: test
✖   subject may not be empty [subject-empty]
✖   type may not be empty [type-empty]

✖   found 2 problems, 0 warnings
ⓘ   Get help: https://github.com/conventional-changelog/commitlint/#what-is-commitlint
```

### 使用 git hook 完成自动校验

搭配[husky](https://typicode.github.io/husky/#/)，让检测自动化，提交的时候如果 message 不符合规范，会提交失败，保证了团队内的提交都必须符合规范。

1. 安装 husky。

   ```sh
   npm install husky --save-dev
   ```

2. 激活 hooks。

   ```sh
   npx husky install
   ```

3. 配置 npm 钩子，在依赖安装完成后自动激活 hooks。

   为了在团队内其他同事安装依赖后能自动激活 kooks，可在 package.json 的 script 中添加钩子，安装完依赖后自动激活钩子。

   ```json
   {
     "scripts": {
       "postinstall": "husky install"
     }
   }
   ```

4. 添加 hooks。

   ```sh
   npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"
   ```

   执行成功后会发现多了一个 .husky 的文件夹，里面就是 git hooks 相关执行文件。

最后，我们再对当前修改修改进行 add、commit，能够看见在 commit 时候就自动开始校验 message 了。

## 高效生成规范的 commit message

规范是有了，但此时会发现写个规范的 commit message 太费劲，效率低而且不利于在团队中推广。

所以可以使用[commitizen](https://github.com/commitizen/cz-cli)，以便能够通过简单交互操作就能写出规范的 commit message。

1. 安装 commitizen。

   - 全局安装，方便使用全局 CLI。

   ```sh
   npm install commitizen -g
   ```

   - 项目中安装，防止别人因为没有全局安装，导致缺少依赖，触发失败。

   ```sh
   npm install commitizen -D
   ```

2. 因为我们使用的是 conventional commit 规范，所以也对应的初始化项目的 commitizen 使用 cz-conventional-changelog 适配器。

   ```sh
   commitizen init cz-conventional-changelog --save-dev --save-exact
   ```

3. 最后在添加 npm script 命令，方便统一、快速调起 commitizen。

   ```json
   {
     "scripts": {
       "commit": "cz"
     }
   }
   ```

安装、配置完成之后，执行`npm run commit`，就可以看见 terminal 中出现 commitizen 的交互界面，只要按照 terminal 中的描述一步步进行操作，就够生成规范的 commit message 了。

本文相关代码示例可从[https://github.com/xuwenchao66/standardize-git-commit-message](https://github.com/xuwenchao66/standardize-git-commit-message)中进行查阅。

## 参考

1. [AngularJS git-commit-guidelines](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines)
2. [Commit message 和 Change log 编写指南](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)
3. [commitlint.js](https://commitlint.js.org/#/)
4. [husky](https://typicode.github.io/husky/#/)
