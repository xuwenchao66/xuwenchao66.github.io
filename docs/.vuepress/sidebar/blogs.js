module.exports = [
  'ast-and-babel',
  'ubuntu-checklist',
  'koa-compose-source-learning',
  'eslint-custom-rules',
  'standardize-git-commit-message',
  'publish-npm-package',
  'write-a-webpack-plugin.md',
  {
    title: 'babel',
    collapsable: false,
    children: ['babel', 'babel-practice', 'babel-plugin-development']
  },
  {
    title: 'rollup',
    collapsable: false,
    children: ['rollup-why', 'rollup-basic-practice', 'rollup-build-library']
  },
  {
    title: 'webpack',
    collapsable: false,
    children: [
      'webpack-introduction',
      'webpack-write-a-loader',
      'webpack-write-a-plugin',
      'webpack-practice-0',
      'webpack-practice-1',
      'webpack-practice-2',
      'webpack-practice-3',
      'webpack-practice-4',
      'webpack-practice-5',
      'webpack-practice-6'
    ]
  },
  {
    title: 'linux 常用命令',
    collapsable: false,
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
