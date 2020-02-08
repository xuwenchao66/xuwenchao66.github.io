import compose from './compose'
class App {
  // middleware数组用来保存中间件函数
  middleware: Array<Function>
  ctx: Object
  constructor() {
    this.middleware = []
    this.ctx = {}
  }
  // 通过use方法可以将函数加入到middleware中
  use(fn: Function) {
    this.middleware.push(fn)
  }
  // 处理请求的函数，这里为了测试方便，调用后开始执行中间件
  callback() {
    // 通过koa-compose组合中间件，让中间件按洋葱模型执行
    return compose(this.middleware)(this.ctx)
  }
}

export default App
