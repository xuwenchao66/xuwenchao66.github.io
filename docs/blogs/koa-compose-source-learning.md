# koa-compose 源码学习

## koa-compose 是什么

[koajs](https://koajs.com/) 是一个轻量级的 `node.js` `web` 框架，其一大特点在于它那称之为“洋葱模型”的中间件执行机制。

然而该模型的实现核心就是 [koa-compose](https://github.com/koajs/compose)，下面将从使用以及源码仓库测试用例，来分析、学习 `koa-compose` 的实现原理。

![koa-onion.png](./img/koa-onion.png)

## compose 函数基本结构

`koa-compose` 能将一个或多个中间件组合成一个中间件。

学习源码之前先了解其基本用法，下方为 [官方测试用例](https://github.com/koajs/compose/blob/master/test/test.js) 中的第一个用例。

```js
it('should work', async () => {
  const arr = []
  const stack = []

  stack.push(async (context, next) => {
    arr.push(1)
    await wait(1)
    await next()
    await wait(1)
    arr.push(6)
  })

  stack.push(async (context, next) => {
    arr.push(2)
    await wait(1)
    await next()
    await wait(1)
    arr.push(5)
  })

  stack.push(async (context, next) => {
    arr.push(3)
    await wait(1)
    await next()
    await wait(1)
    arr.push(4)
  })

  await compose(stack)({})
  expect(arr).toEqual(expect.arrayContaining([1, 2, 3, 4, 5, 6]))
})
```

通过该用例了解 `compose` 是一个高阶函数，能组合一系列的中间件，让其能够顺序执行，并且各个中间件拥有控制中间件执行的方法 (`next` 函数)。所以 `compose` 函数的基本骨架如下，下方为一个高阶函数，并且开头校验了 `middleware` 参数必须为一个都是函数的数组。

```js
const compose = (middleware) => {
  if (!Array.isArray(middleware)) throw new TypeError('中间件必须是一个数组')
  if (middleware.some((fn) => typeof fn !== 'function'))
    throw new TypeError('每个中间件必须是一个函数')

  return () => {}
}

module.exports = compose
```

## 测试驱动完善 compose 函数

把官方源码 [https://github.com/koajs/compose](https://github.com/koajs/compose) `fork`、克隆下来，保证我们代码正确性的最有效方法就是通过官方的所有单元测试了。

克隆完成后，安装依赖，将 `test.js` 里面引用的 `compose` 函数改为自己新建的 `compose.js`，该文件有我们上面的基本骨架，然后执行 `npm test` 执行单元测试，可以看到目前只通过了小部分用例。

下面继续分析，目标就是让我们的 `compose.js` 通过所有官方用例。

通过用例可以发现，`compose` 返回的函数执行之后，会执行第一个中间件，后续的中间件执行就是由中间件通过 `next` 函数的调用来控制。

### 通过基本用例

- 再次回想“洋葱模型”，这跟嵌套函数的调用栈表达形式非常相似，其实 `compose` 就是利用了函数的递归调用。
- 根据中间件模型 `async (context, next) => {}`，可以构造出基本的递归函数调用。
- 因为 `compose` 函数中能够使用 `async` 语法糖的，也就是函数的返回值都必须是 `Promise`，所以无论是函数的返回值、还是错误都分别通过 `Promise.resolve`、`Promise.reject` 来进行值包装。
- 通过一个 `index` 来记录已经执行的中间件下标，在递归中传入上下文对象 `context` 以及中间件执行控制函数 `next`，这里通过 传入 `dispatch.bind(null, i + 1)` 来实现顺序执行以及控制。

```js
const compose = (middleware) => {
  // 参数校验，middleware 必须是一个都由函数组成的数组
  if (!Array.isArray(middleware)) throw new TypeError('中间件必须是一个数组')
  if (middleware.some((fn) => typeof fn !== 'function'))
    throw new TypeError('每个中间件必须是一个函数')

  return (context, next) => {
    // 记录最后执行的中间件 index
    let index = -1
    // 执行第一个中间件
    return dispatch(0)
    function dispatch(i) {
      // 更新已执行的中间件 index
      index = i
      // 获取待执行的中间件，如果中间件执行完了则执行高阶函数传入的 next
      const fn = i === middleware.length ? next : middleware[i]
      // 如果没有中间件函数需要执行了，终止递归
      if (!fn) return Promise.resolve()
      try {
        // 执行中间件
        return Promise.resolve(fn(context, dispatch.bind(null, i + 1)))
      } catch (error) {
        // 捕获错误
        return Promise.reject(error)
      }
    }
  }
}

module.exports = compose
```

再次执行单元测试，现在已经基本通过所有用例了。

### 通过剩余用例

✕ should throw if next() is called multiple times

该用例指明不能再同一个中间件函数内多次调用 `next`，比如下方就该抛出错误。

```js
;async (ctx, next) => {
  await next()
  await next()
}
```

观察现有的函数中变量 `index` 与 `i` 的关系，可得 `index` 在每次递归开头始终是比 `i` 小 1 的，虽然才赋值为相等。

如果在一个函数中多次调用 `next`，就可能出现类似下方的调用栈情况。

```js
(context, next) => {

  let index = 1

  function dispatch(1) {
    dispatch(2)
    dispatch(2)
  }

}
```

第一个 `dispatch(2)` 为正常调用，当第二个 `dispatch(2)` 再被调用时，此时 `index` 由于第一个 `dispatch(2)` 的调用已被赋值为 2，第二次调用中 `index` 已经不再小于 `i` 了，所以可得出如果在递归函数中出现 `i <= index` 说明 `next` 函数被多次调用。

最后调整代码，执行单元测试，通过了所有用例。

```js
const compose = (middleware) => {
  // 参数校验，middleware 必须是一个都由函数组成的数组
  if (!Array.isArray(middleware)) throw new TypeError('中间件必须是一个数组')
  if (middleware.some((fn) => typeof fn !== 'function'))
    throw new TypeError('每个中间件必须是一个函数')

  return (context, next) => {
    // 记录最后执行的中间件 index
    let index = -1
    // 执行第一个中间件
    return dispatch(0)
    function dispatch(i) {
      // 多次调用 next 抛出错误
      if (i <= index)
        return Promise.reject(new Error('next() called multiple times'))
      // 更新已执行的中间件 index
      index = i
      // 获取待执行的中间件，如果中间件执行完了则执行高阶函数传入的 next
      const fn = i === middleware.length ? next : middleware[i]
      // 如果没有中间件函数需要执行了，终止递归
      if (!fn) return Promise.resolve()
      try {
        // 执行中间件
        return Promise.resolve(fn(context, dispatch.bind(null, i + 1)))
      } catch (error) {
        // 捕获错误
        return Promise.reject(error)
      }
    }
  }
}

module.exports = compose
```

完整的代码可参考 [https://github.com/xuwenchao66/compose/blob/master/compose.js](https://github.com/xuwenchao66/compose/blob/master/compose.js)。

## 参考

1. [https://github.com/koajs/compose](https://github.com/koajs/compose)
2. [https://koajs.com/](https://koajs.com/)
