<template>
  <div id="global-layout">
    <component :is="layout" />
    <footer class="global-layout__footer">
      <a href="https://beian.miit.gov.cn" target="_blank">粤ICP备2023151151号-1</a>
    </footer>
  </div>
</template>

<script>
export default {
  computed: {
    layout() {
      if (this.$page.path) {
        return this.$frontmatter.layout ? this.$frontmatter.layout : 'Layout'
      }
      return 'NotFound'
    }
  }
}
</script>

<style>
:root {
  --footer-height: 38px;
}

#global-layout {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}

.sidebar {
  bottom: var(--footer-height) !important;
}

.theme-container {
  padding-bottom: var(--footer-height);
}

.global-layout__footer {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 999;
  width: 100%;
  height: var(--footer-height);
  line-height: var(--footer-height);
  text-align: center;
  background: #fff;
  border: 1px solid #eaecef;
}

.global-layout__footer a {
  color: #939393;
  font-size: 12px;
}

::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background-color: #e7e9eb;
}
::-webkit-scrollbar-track {
  background-color: #fff;
}

.page .theme-default-content:not(.custom) {
  max-width: 850px;
}

.go-to-top {
  bottom: 3.6rem !important;
}
</style>