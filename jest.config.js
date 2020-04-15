module.exports = {
  moduleNameMapper: {
    '\\.(scss)$': 'identity-obj-proxy',
    '\\.(svg)$': './config/jest/__mocks__/svg.js',
    '\\.(png|jpg|gif|eot|ttf|woff(2)?)$': './config/jest/file-transform.js'
  },
  setupFiles: ['./config/jest/setup-tests.js']
}
