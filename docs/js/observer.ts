
// JavaScript发布-订阅模式的简单实现
class EventEmitter {
  private events: Object = {}
  on(eventName: string, fn: Function): void {
    Array.isArray(this.events[eventName]) ? this.events[eventName].push(fn) : (this.events[eventName] = [fn])
  }
  emit(eventName: string): boolean {
    if (this.haveEvents(eventName)) {
      this.events[eventName].forEach(fn => {
        fn()
      })
      return true
    }
    return false
  }
  off(eventName: string, fn?: Function): boolean {
    if (this.haveEvents(eventName)) {
      const fnIndex = this.events[eventName].findIndex(f => f === fn)
      if (typeof fn === 'function' && fnIndex >= 0) {
        this.events[eventName].splice(fnIndex, 1)
      } else {
        this.events[eventName] = []
      }
      return true
    }
    return false
  }
  haveEvents(eventName: string): boolean {
    return this.events[eventName] && this.events[eventName].length
  }
}

const EE = new EventEmitter()
const log1 = () => console.log('1')
const log1_1 = () => console.log('1_1')
const log1_1_1 = () => console.log('1_1_1')
const log2 = () => console.log('2')

EE.on('event1', log1)
EE.on('event1', log1_1)
EE.on('event1', log1_1_1)
EE.on('event2', log2)
EE.off('event1', log1_1)
EE.emit('event1')
EE.emit('event2')
console.log(EE)
