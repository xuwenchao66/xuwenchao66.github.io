<template>
</template>
<script>
export default {
  name: 'adapter',
  mounted () {
    console.log('eeeee')
    import('@designPatterns/js/adapter.ts').then(moudle => {
      console.log(module)
      module.loaded = false
    })
  }
}
</script>
