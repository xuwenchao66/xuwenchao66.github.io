
const compose = (middleware: Array<Function>, next?: Function) => {
  return (ctx: Object) => {
    let index = -1
    return dispatch(0)
    function dispatch(i: number): Promise<any> {
      if (i <= index) return Promise.reject(new Error('你在中间件中多次调用了next()'))
      // 取出需要执行的中间件函数
      let fn = middleware[i]
      // 如果中间函数执行完毕了，则执行compose传入的next
      if (i === middleware.length) fn = next
      index = i
      // 如果没有需要执行的函数了直接返回resolve，退出流程
      if (!fn) return Promise.resolve()
      try {
        return Promise.resolve(fn(ctx, () => dispatch(i + 1)))
      } catch (error) {
        return Promise.reject(error)
      }
    }
  }
}

export default compose
