import './style.css'
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  router.beforeEach((to, from, next) => {
    const isRouterChange = to.path !== from.path
    const componentName = (to.path.match(/\/(\w+)\./) || [])[1]
    if (isRouterChange && /^\/designPatterns/.test(to.path) && componentName) {
      import(`../designPatterns/components/${componentName}`).then(module => {
        Vue.component(module.default.name, module.default)
        module.default._compiled = false
        next()
      })
    } else {
      next()
    }
  })
}