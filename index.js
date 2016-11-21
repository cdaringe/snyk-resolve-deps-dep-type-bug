'use strict'

const deps = require('snyk-resolve-deps')

deps(process.cwd(), { dev: true }).then(function (tree) {
  console.log([
    'development dependency a reported as prod, not dev',
    '"tree.dependencies.b.dependencies.a.depType" ==>',
    `\t${tree.dependencies.b.dependencies.a.depType}`
  ].join('\n'))
})
