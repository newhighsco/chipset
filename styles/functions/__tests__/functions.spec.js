const { resolve } = require('path')
const { sync } = require('glob')
const { runSass } = require('sass-true')
const sass = require('sass')

describe('Styles/Functions', () => {
  const files = sync(resolve(__dirname, '**/*.spec.scss'))

  files.forEach(file => {
    runSass({ file }, { sass, describe, it })
  })
})
