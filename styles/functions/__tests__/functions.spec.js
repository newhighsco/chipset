const { resolve } = require('path')
const { sync } = require('glob')
const { runSass } = require('sass-true')

describe('Styles/Functions', () => {
  const files = sync(resolve(__dirname, '**/_rem.spec.scss'))

  files.forEach(file => {
    runSass({ describe, it }, file)
  })
})
