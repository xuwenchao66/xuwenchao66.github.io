module.exports = [
  '',
  'koa-compose',
  'write-webpack-plugin',
  'standardize-git-commit-message',
  'babel',
  'publish-npm-package',
  {
    title: 'rollup',
    collapsable: false,
    sidebarDepth: 1,
    children: ['rollup-why']
  },
  {
    title: 'linux 常用命令',
    collapsable: false,
    sidebarDepth: 1,
    children: [
      'linux-commands',
      'linux-commands-terminal-control',
      'linux-commands-cursor-movement',
      'linux-commands-delete-on-terminal',
      'linux-commands-terminal-history',
      'linux-commands-process-and-job',
      'linux-commands-system-and-hardware'
    ]
  },
  {
    title: 'docker',
    collapsable: false,
    sidebarDepth: 1,
    children: [
      'docker-introduction',
      'docker-installation',
      'docker-practice-0',
      'docker-practice-1',
      'docker-practice-2',
      'docker-practice-3',
      'docker-practice-4'
    ]
  }
]
