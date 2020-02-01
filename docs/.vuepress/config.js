const path = require('path')
module.exports = {
  title: 'JavaScript设计模式与开发实践',
  description: '此项目记录在看《JavaScript设计模式与开发实践》一书时敲的代码以及思考',
  themeConfig: {
    sidebar: [
      'singleton',
      'strategy',
      'proxy',
      'iterator',
      'observer',
      'command',
      'composite',
      'templateMethod',
      'flyweight',
      'chainOfResponsibility',
      'mediator',
      'decorator'
    ]
  },
  alias: {
    '@js': path.resolve(process.cwd(), './docs/js')
  },
  configureWebpack: {
    resolve: {
      extensions: ['.ts', '.tsx'],
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
            presets: [
              '@vue/babel-preset-jsx'
            ],
          },
        },
        {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            appendTsxSuffixTo: [/\.vue$/],
          }
        }, ]
      }, ]
    }
  }
}