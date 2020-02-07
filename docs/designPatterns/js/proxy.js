/**
 * 虚拟代理
 * 
 * 实现图片预加载
 */
import imgHoder from '../img/holder.svg'

// 图片加载
const loadImg = (node, src) => {
  node.src = src
}

// 代理图片加载，在加载完成之前显示一张占位图
const loadImgWithHolder = (() => {
  const img = new Image()
  return (node, src) => {
    node.src = imgHoder
    img.onload = () => loadImg(node, src)
    img.src = src
  }
})()


/**
 * 缓存代理
 * 
 * 缓存计算结果
 */

// 假装是复杂的计算
function mult() {
  const args = Array.prototype.slice.apply(arguments)
  return args.reduce((acc, item) => acc * item, 1)
}

// 创建缓存代理的工厂函数，缓存计算过的结果
const createProxyCacheFactory = (fn) => {
  const cache = {}
  return function() {
    const args = Array.prototype.join.call(arguments, ',')
    if (cache[args]) {
      console.log('return value from cahce')
      return cache[args]
    }
    return cache[args] = fn.apply(this, arguments)
  }
}

const proxyMult = createProxyCacheFactory(mult)

console.log(proxyMult(1, 2, 3, 4))
console.log(proxyMult(1, 2, 3, 4))

export { loadImg, loadImgWithHolder }