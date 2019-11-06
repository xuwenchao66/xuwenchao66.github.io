/**
 * 内部迭代器（函数的内部已经定义好了迭代规则）
 */
const each = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr)
  }
}
each([1, 2, 3], i => console.log(i))