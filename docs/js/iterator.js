/**
 * 内部迭代器（函数的内部已经定义好了迭代规则）
 */

// 正序迭代器
const each = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr)
  }
}

// 倒序迭代器
const reverseEach = (arr, cb) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    cb(arr[i], i, arr)
  }
}

// 终止迭代器
const breakEach = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    const val = cb(arr[i], i, arr)
    if (val === false) {
      break
    }
  }
}

each([1, 2, 3], i => console.log(i))
reverseEach([4, 5, 6], i => console.log(i))
breakEach([7, 8, 9], i => {
  console.log(i)
  if (i === 8) return false
})

/**
 * 外部迭代器（必须显式地请求迭代下一个元素，增加了调用的复杂度，但相对也增强了迭代器的灵活性）
 */
getIterator = function(arr) {
  let current = 0
  return {
    next: function() {
      const value = arr[current]
      const done = current === arr.length
      current++
      return {
        value,
        done
      }
    }
  }
}

const array = [10, 11, 12]
const myIterator = getIterator(array)
console.log(myIterator.next())
console.log(myIterator.next())
console.log(myIterator.next())
console.log(myIterator.next())