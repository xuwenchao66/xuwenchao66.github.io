/**
 * 使用代理模式实现图片加载占位符
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

export { loadImg, loadImgWithHolder }