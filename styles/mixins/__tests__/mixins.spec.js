const { resolve } = require('path')
const { sync } = require('glob')
const { runSass } = require('sass-true')

describe('Styles/Mixins', () => {
  const files = sync(resolve(__dirname, '**/*.spec.scss'))

  files.forEach(file => {
    runSass({ describe, it }, file)
  })
})
