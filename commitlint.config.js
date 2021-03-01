module.exports = {
  extends: ['@commitlint/config-conventional'],
  ignores: [
    (message) => {
      if (/^Merge/.test(message)) return true
    }
  ]
}
