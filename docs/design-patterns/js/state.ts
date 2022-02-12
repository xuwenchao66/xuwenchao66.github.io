/* 模拟一个电灯开关，这个开关有一个按钮，按钮逻辑为：
如果此时灯是关闭的，按下按钮会开灯；如果此时灯是打开的，按下按钮灯会关闭。 */

class LightControl {
  state: string = 'off'
  pressed() {
    if (this.state === 'off') {
      this.state = 'on'
      console.log('开灯')
    } else {
      this.state = 'off'
      console.log('关灯')
    }
  }
}

/* 如果我们现在想在off和on之间加一个中间状态weak（弱光），我们可以在pressed方法中增加对应逻辑
虽然实现了，但是问题也很明显，pressed方法会根据需求无限膨胀，违背了开放-封闭原则。状态切换不明显，
pressed函数变得越来越难阅读，牵一发而动全身。 */

class LightControl1 {
  state: string = 'off'
  pressed() {
    if (this.state === 'off') {
      this.state = 'weak'
      console.log('弱光')
    } else if (this.state === 'weak') {
      this.state = 'strong'
      console.log('强光')
    } else if (this.state === 'strong') {
      this.state = 'off'
      console.log('关灯')
    }
  }
}

/* 用状态模式进行重构，重构后的所有状态一目了然，而且状态的切换也更加直观。
增加状态只需要增加新的类，而无需改变客户端的逻辑代码 */

// 环境类
class Context {
  offState: State
  weakState: State
  strongState: State
  currentState: State
  constructor() {
    this.offState = new OffState()
    this.weakState = new WeakState()
    this.strongState = new StrongState()
    this.currentState = this.offState
  }
  pressed() {
    this.currentState.pressed(this)
  }
  setState(state) {
    this.currentState = state
  }
}

// 抽象状态类
abstract class State {
  abstract pressed(context: Context): void
}

// 具体状态类
class OffState extends State {
  pressed(context: Context) {
    console.log('弱光')
    context.setState(context.weakState)
  }
}

class WeakState extends State {
  pressed(context: Context) {
    console.log('强光')
    context.setState(context.strongState)
  }
}

class StrongState extends State {
  pressed(context: Context) {
    console.log('关灯')
    context.setState(context.offState)
  }
}

const ctx = new Context()
ctx.pressed()
ctx.pressed()
ctx.pressed()
ctx.pressed()

/* JavaScript作为动态语言，可以很方便的通过委托来实现状态模式，我们用call绑定了函数运行时的this，
而无需像传统面向对象语言一样让一个对象持有另一个对象 */

const FSM = {
  off: {
    pressed() {
      console.log('弱光')
      this.setState(FSM.weak)
    }
  },
  weak: {
    pressed() {
      console.log('强光')
      this.setState(FSM.strong)
    }
  },
  strong: {
    pressed() {
      console.log('关灯')
      this.setState(FSM.off)
    }
  }
}

class Context2 {
  currentState: typeof FSM[keyof typeof FSM]
  constructor() {
    this.currentState = FSM.off
  }
  pressed() {
    this.currentState.pressed.call(this)
  }
  setState(state) {
    this.currentState = state
  }
}

const ctx2 = new Context2()
console.log('------')
ctx2.pressed()
ctx2.pressed()
ctx2.pressed()
