<template>
  <div class="proxy-img">
    <p>图1加载的时候没有加载中占位图， 图2加载的时候有加载中占位图</p>
  </div>
</template>

<script>
import { loadImg, loadImgWithHolder } from '@designPatterns/js/proxy.js'
export default {
  name: 'proxy',
  mounted() {
    const imgNode1 = document.createElement('img')
    const imgNode2 = document.createElement('img')
    const wrapper = document.querySelector('.proxy-img')
    wrapper.appendChild(imgNode1)
    wrapper.appendChild(imgNode2)
    loadImg(
      imgNode1,
      `https://w.wallhaven.cc/full/g8/wallhaven-g8171e.png?t=${new Date().getTime()}`
    )
    loadImgWithHolder(
      imgNode2,
      `https://w.wallhaven.cc/full/g8/wallhaven-g8171e.png?t=${new Date().getTime()}`
    )
  }
}
</script>

<style>
.proxy-img img {
  margin-right: 60px;
  display: inline-block;
  width: 200px;
  height: 200px;
}
</style>