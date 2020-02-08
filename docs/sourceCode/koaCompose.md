# koa-compose

koa是一个基于node.js的web开发框架，其最大特点就是它的中间件执行控制，洋葱模型。

现在来解读洋葱模型的实现核心[koa-compose](https://github.com/koajs/compose)

![koa-onion.png](./img/koa-onion.png)

在下面的解析中我们可以看到，compose过后的中间件函数调用栈跟这洋葱模型非常相似。

## 实现一个简版koa app

<<< @/docs/sourceCode/js/koaCompose/app.ts

## 实现compose函数

<<< @/docs/sourceCode/js/koaCompose/compose.ts

- 通过compose函数的调用方式`compose(this.middleware)(this.ctx)`，可知compose函数是一个高阶函数，返回一个函数。

  ```ts
  const compose = (middleware: Array<Function>, next?: Function) => {
    return (ctx: Object) => {}
  }
  ```

- 声明变量index，来辅助实现当在一个中间件中多次调用next函数时，抛出错误。

  在中间件函数中调用`next()`，也就是调用`dispatch(i)`，index从-1开始，dispatch(i)的i从0开始，

  当我们遵守一个中间件中最多只调用一次next函数的规则时：
  
  1. 在第一个中间件执行一次`next()`的时候，调用`dispatch(0)`，i等于0，index等于-1, 然后经过`index = i`，index等于0，

  2. 在第二个中间件执行一次`next()`的时候，调用`dispatch(0 + 1)`，i等于1，index等于0, 然后经过`index = i`，i等于1，

  以此类推，在经过`index = i`赋值之前，如果我们保证在一个中间件中调用next函数不超过一次，`i > index`是恒成立的。
  
  ```ts
  let index = -1
  ```

  ```ts
  return dispatch(0)
  ```

  ```ts
  index = i
  ```

  ```ts
  fn(ctx, () => dispatch(i + 1))
  ```

  反之如果我们在一个中间件函数中调用next函数的次数大于一次时：

  1. 在第一个中间件执行一次`next()`的时候，调用`dispatch(0)`，i等于0，index等于-1, 然后经过`index = i`，index等于0，

  2. 在第一个中间件执行第二次`next()`的时候，因为此时仍然在`dispatch(0)`这个调用栈中，所以i还是等于0，但是index经过步骤1的赋值此时index等于0
  
  所以当`i <= index`，那就说明在同一个中间件中调用了大于一次的next函数，此时抛出错误。

  ```ts
  if (i <= index) return Promise.reject(new Error('你在中间件中多次调用了next()'))
  ```

- 递归调用dispatch函数来实现洋葱模型般的调用，该函数返回了Promise，这样我们就能够在中间件中使用Promise或者async函数来实现更简洁的异步编程。

  ```ts
  function dispatch(i: number): Promise<any> {}
  ```

- 递归调用，`fn(ctx, () => dispatch(i + 1))`。

  ```ts
  Promise.resolve(fn(ctx, () => dispatch(i + 1)))
  ```

  这里的`() => dispatch(i + 1)`，就是我们中间件函数的第二个参数next。
  比如，我们从`dispatch(0)`开始，开始执行中间件fn0，当我们在fn0中执行next的时候就等同于`dispatch(1)`，此时函数执行由fn0进入到fn1中，调用栈大致如下:

  ```ts
  fn0() {
    fn1() {
      fn2() {
        ...()
        }
      }
    }
  }
  ```

  这个调用栈就跟我们的洋葱模型长得是一样的。

## 测试代码

<<< @/docs/sourceCode/js/koaCompose/test.ts

<sourceCode-koaCompose />

上面只对部分的核心代码进行解析，完整的实现请前往[https://github.com/koajs/compose/blob/master/index.js](https://github.com/koajs/compose/blob/master/index.js)

## 参考

1. [https://github.com/koajs/koa/blob/master/lib/application.js](https://github.com/koajs/koa/blob/master/lib/application.js)

2. [https://github.com/koajs/compose](https://github.com/koajs/compose)

3. [可能是目前市面上比较有诚意的Koa2源码解读](https://zhuanlan.zhihu.com/p/34797505)