// 模拟一个聊天室系统

/* 第一版实现，成员有接受和发送方法，每个成员有一个members属性保留着当前与自己在同一个聊天室的成员。
这样就会带来一些问题。
1. 每个成员之间互相引用，关系结构较乱，member对象难以复用。
2. 任何一个对象的变化都需要通知引用了该对象的所有对象进行对应状态更新。
etc... */

/* class Member {
  receive() { }
  send() { }
  members: Member[]
} */

/* 使用中介者模式进行模拟、优化该聊天系统，现在member对象之间的耦合已经解除，对象之间的交互统一通过中介类room来进行，
无需感知其他member对象的存在。我们可以给room类不断扩展来适应新需求，保证member对象的可复用、维护性。*/

// 首先实现中介类room
class Room {
  members: Set<Member>
  constructor() {
    this.members = new Set()
  }
  add(member: Member) {
    this.members.add(member)
    return this
  }
  receive(sender) {
    this.members.forEach(m => sender !== m && m.receive())
  }
}
const room = new Room()

// 实现同事类
class Member {
  name: string
  constructor(name: string) {
    this.name = name
  }
  receive() {
    console.log(`${this.name}收到了消息`)
  }
  send() {
    console.log(`---${this.name}发送了消息---`)
    room.receive(this)
  }
}

const m1 = new Member('m1')
const m2 = new Member('m2')
const m3 = new Member('m3')
room.add(m1).add(m2).add(m3)
m1.send()
m2.send()
