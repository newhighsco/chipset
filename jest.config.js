module.exports = {
  projects: [
    {
      moduleNameMapper: {
        '\\.(scss)$': 'identity-obj-proxy',
        '\\.(svg)$': '<rootDir>/config/jest/__mocks__/svg.js',
        '\\.(png|jpg|gif|eot|ttf|woff(2)?)$':
          '<rootDir>/config/jest/file-transform.js'
      },
      setupFilesAfterEnv: ['<rootDir>/config/jest/setup-tests.js'],
      testEnvironment: 'jsdom',
      testPathIgnorePatterns: ['/styles/'],
      testMatch: ['**/(Backdrop|Button)/*.spec.*']
    },
    {
      rootDir: './styles',
      testEnvironment: 'node'
    }
  ]
}
