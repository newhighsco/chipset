module.exports = {
  projects: [
    {
      moduleNameMapper: {
        '\\.(scss)$': 'identity-obj-proxy',
        '\\.(svg)$': '<rootDir>/config/jest/__mocks__/svg.js',
        '\\.(png|jpg|gif|eot|ttf|woff(2)?)$':
          '<rootDir>/config/jest/file-transform.js'
      },
      setupFiles: ['<rootDir>/config/jest/setup-tests.js'],
      testPathIgnorePatterns: ['/styles/']
    },
    {
      rootDir: './styles',
      testEnvironment: 'node'
    }
  ]
}
