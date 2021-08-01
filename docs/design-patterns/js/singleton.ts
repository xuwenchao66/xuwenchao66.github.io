// 实现方式1: 使用高阶函数缓存实例˝
const getSingle = (fn: Function) => {
  let singleton
  return function() {
    return singleton || (singleton = fn.apply(this, arguments))
  }
}

class Person {
  name: string
  constructor(name: string) {
    this.name = name
    console.log('only log once.')
  }
  setName(name: string) {
    this.name = name
  }
}

const getPerson = getSingle(() => new Person('xuwenchao'))
const p1 = getPerson()
const p2 = getPerson()
p2.setName('xuwenchao2')
console.log(p1, p2, p1 === p2)

// 实现方式2:  由类提供获取实例的静态方法
class Dialog {
  instance: Dialog
  static instance: Dialog
  // 使用 private，防止外部使用 new 进行实例化
  private constructor() {
    this.instance = null
  }
  // 获取单例实例的静态方法
  static getInstance(): Dialog {
    if (this.instance) return this.instance
    return (this.instance = new Dialog())
  }
}

const dialog1 = Dialog.getInstance()
const dialog2 = Dialog.getInstance()
console.log(dialog1 === dialog2)
