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