/** 单例模式
 * 
 * 定义：保证一个类仅有一个实例，并且提供一个访问它的全局访问点
 * 
 * 比如：浏览器window对象，应用中的toast，dialog组件等等
 * 
 * 实现思路：用一个变量来标志当前是否已经为某个类创建过对象，如果
 *  是则在下一次获取该类的实例时，直接返回之前创建的对象
 * 
 */

const getSingle = fn => {
  let singleton
  return function() {
    return singleton || (singleton = fn.apply(this, arguments))
  }
}

class Persone {
  constructor(name) {
    this.name = name
    console.log('only log once.')
  }
  setName(name) {
    this.name = name
  }
}

const getPerson = getSingle(() => new Persone('xuwenchao'))
const p1 = getPerson()
const p2 = getPerson()
p2.setName('xuwenchao2')
console.log(p1, p2, p1 === p2)
