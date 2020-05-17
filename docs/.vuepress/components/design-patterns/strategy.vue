<template>
  <div class="wrapper">
    <div class="strategy-ball"></div>
    <form @submit.prevent>
      <input name="name" type="text" placeholder="请输入姓名" />
      <input name="number" type="text" placeholder="请输入学号" />
      <button @click.stop="validate">校验</button>
    </form>
  </div>
</template>

<script>
import { Animate, Validator } from '@design-patterns/js/strategy.js'
export default {
  name: 'design-patterns-strategy',
  mounted() {
    const animate = new Animate(document.querySelector('.strategy-ball'))
    animate
      .move(100, 'slow')
      .move(100, 'fast')
      .move(100, 'slow')
  },
  methods: {
    validate() {
      const form = document.getElementsByTagName('form')[0]
      const validator = new Validator()
      validator.add(form.name.value, 'isNotEmpty')
      validator.add(form.number.value, 'minLength', { min: 6 })
      const errMsg = validator.validate()
      errMsg ? alert(errMsg) : alert('校验成功')
    }
  }
}
</script>

<style scoped>
.wrapper {
  position: relative;
  width: 100%;
  height: 300px;
  margin-top: 20px;
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
