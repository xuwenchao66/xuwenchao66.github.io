const path = require('path')
const resolvePath = src => path.resolve(process.cwd(), src)

module.exports = {
  title: 'Emem...',
  description: '徐文超个人博客',
  themeConfig: {
    nav: require('./nav'),
    sidebar: require('./sidebar')
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