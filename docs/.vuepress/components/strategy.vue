<template>
  <div class="wrapper">
    <div class="strategy-ball"></div>
  </div>
</template>

<script>
import { Animate } from '@js/strategy.js'
export default {
  name: 'strategy',
  mounted() {
    const animate = new Animate(document.querySelector('.strategy-ball'))
    animate.move(100, 'slow').move(100, 'fast').move(100, 'slow')
  }
}
</script>

<style scoped>
.wrapper {
  position: relative;
  width: 100%;
  height: 300px;
  border: 1px solid;
}
.strategy-ball {
  position: absolute;
  width: 30px;
  height: 30px;
  background: rgb(9, 209, 166);
  border-radius: 50%;
  cursor: pointer;
}
</style>
