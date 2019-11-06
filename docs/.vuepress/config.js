const path = require('path')
module.exports = {
  title: 'JavaScript设计模式与开发实践',
  description: '此项目记录在看《JavaScript设计模式与开发实践》一书时敲的代码以及思考',
  themeConfig: {
    sidebar: [
      '/singleton',
      '/strategy',
      '/proxy',
      '/iterator'
      
    ]
  },
  alias: {
    '@js': path.resolve(process.cwd(), './docs/js')
  }
}
