import App from './app'
const app = new App()
const sleep = s => new Promise(resolve => {
  setTimeout(resolve, s * 1000)
})

app.use(async (ctx, next) => {
  console.log('1---start')
  await next()
  console.log('1---end')
})
app.use(async (ctx, next) => {
  console.log('2---start')
  await sleep(2)
  await next()
  console.log('2---end')
})
app.use(async (ctx, next) => {
  console.log('3---start')
})

app
  .callback()
  .then(() => {
    console.log('所有中间件执行完毕')
  }).catch(error => {
    console.error(error)
  })

/* 输出结果
  1---start
  2---start
  // 两秒后继续执行
  3---start
  2---end
  1---end
  所有中间件执行完毕
*/
