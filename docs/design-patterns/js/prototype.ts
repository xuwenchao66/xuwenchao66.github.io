// 抽象原型接口
abstract class Sharp {
  abstract clone(): Sharp
}

// 具体原型类
class Circle extends Sharp {
  radius: number
  constructor(radius: number = 1) {
    super()
    this.radius = radius
  }
  clone() {
    return new Circle(this.radius)
  }
}

// 具体原型类
class Rectangle extends Sharp {
  width: number
  height: number
  constructor(width: number = 1, height: number = 1) {
    super()
    this.width = width
    this.height = height
  }
  clone() {
    return new Rectangle(this.width, this.height)
  }
}

type SharpTypes = 'circle' | 'rectangle'

type SharpMap = { [sharp in SharpTypes]: Sharp }

// 原型模式的扩展，中心化的原型管理、注册表类
class Manager {
  sharpMap: SharpMap
  constructor() {
    this.sharpMap = {
      circle: new Circle(),
      rectangle: new Rectangle()
    }
  }
  getSharp(type: SharpTypes) {
    return this.sharpMap[type]
  }
}

// 客户端类
class Application {
  constructor() {
    const circle1 = new Circle(5)
    const circle2 = circle1.clone()
    const circle3 = circle2.clone()
    const rectangle1 = new Rectangle(2, 10)
    const rectangle2 = rectangle1.clone()
    console.log('circle1', circle1)
    console.log('circle2', circle2)
    console.log('circle3', circle3)
    console.log('circle1 is equal to circle2 ->', circle1 === circle2)
    console.log('circle2 is equal to circle3 ->', circle2 === circle3)
    console.log('rectangle1', rectangle1)
    console.log('rectangle2', rectangle2)
    console.log(
      'rectangle1 is equal to rectangle2 ->',
      rectangle1 === rectangle2
    )
    const manager = new Manager()
    const circleFromManager = manager.getSharp('circle')
    const rectangleFromManager = manager.getSharp('rectangle')
    console.log('circleFromManager', circleFromManager)
    console.log('rectangleFromManager', rectangleFromManager)
  }
}

new Application()
