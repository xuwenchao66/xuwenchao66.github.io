const path = require('path')
const markdownItTaskLists = require('markdown-it-task-lists')
const resolvePath = src => path.resolve(process.cwd(), src)

module.exports = {
  title: `xuwenchao' blogs`,
  description: '徐文超个人博客',
  themeConfig: {
    nav: require('./nav'),
    sidebar: require('./sidebar/index'),
    sidebarDepth: 3,
    lastUpdated: '上次更新'
  },
  plugins: ['@vuepress/last-updated', '@vuepress/back-to-top', '@vuepress/medium-zoom'],
  alias: {
    '@design-patterns': resolvePath('./docs/design-patterns'),
    '@blogs': resolvePath('./docs/blogs')
  },
  markdown: {
    extendMarkdown: md => {
      md.use(markdownItTaskLists)
    }
  },
  configureWebpack: {
    resolve: {
      extensions: ['.ts', '.tsx']
    },
    module: {
      rules: [
        {
          test: /\.ts?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                babelrc: false,
                configFile: false,
                presets: ['@vue/babel-preset-jsx']
              }
            },
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true,
                appendTsxSuffixTo: [/\.vue$/]
              }
            }
          ]
        }
      ]
    }
  }
}
