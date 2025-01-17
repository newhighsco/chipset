/** @type {import('jest').Config} */
module.exports = {
  projects: [
    {
      displayName: 'src',
      moduleNameMapper: {
        '\\.(scss)$': 'identity-obj-proxy',
        '\\.(svg)$': '<rootDir>/config/jest/__mocks__/svg.js',
        '\\.(png|jpg|gif|eot|ttf|woff(2)?)$':
          '<rootDir>/config/jest/file-transform.js'
      },
      setupFilesAfterEnv: ['<rootDir>/config/jest/setup-tests.js'],
      testEnvironment: 'jsdom',
      testPathIgnorePatterns: ['/styles/'],
      transformIgnorePatterns: []
    },
    { displayName: 'styles', rootDir: './styles' }
  ],
  reporters: [
    'default',
    ['jest-junit', { outputDirectory: 'reports', outputName: 'jest.xml' }]
  ]
}
