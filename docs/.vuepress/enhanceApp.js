const redirectList = {
  '/': '/blogs/ast-and-babel/',
  '/blogs/': '/blogs/ast-and-babel/',
  '/reading-notes/': '/reading-notes/refactoring/'
}

export default ({ router }) => {
  router.beforeEach((to, from, next) => {
    const redirectPath = redirectList[to.path]
    redirectPath ? next({ path: redirectPath }) : next()
  })
}
