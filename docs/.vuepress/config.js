const path = require('path')
const resolvePath = src => path.resolve(process.cwd(), src)

module.exports = {
  title: 'Emem...',
  description: '此项目记录在看《JavaScript设计模式与开发实践》一书时敲的代码以及思考',
  themeConfig: {
    // 此项目记录在看《JavaScript设计模式与开发实践》一书时敲的代码以及思考
    sidebar: {
      '/designPatterns/': [
        '',
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
        'decorator',
        'state',
        'adapter'
      ],
      '/sourceCode/': [
        ''
      ]
    }
  },
  alias: {
    '@designPatterns': resolvePath('./docs/designPatterns')
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