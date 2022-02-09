module.exports = {
  projects: [
    {
      preset: 'ts-jest/presets/js-with-ts',
      moduleNameMapper: {
        '\\.(scss)$': 'identity-obj-proxy',
        '\\.(svg)$': '<rootDir>/config/jest/__mocks__/svgMock.js',
        '\\.(png|jpg|gif|eot|ttf|woff(2)?)$':
          '<rootDir>/config/jest/__mocks__/fileMock.js'
      },
      setupFilesAfterEnv: ['<rootDir>/config/jest/setup.js'],
      testEnvironment: 'jest-environment-jsdom',
      // TODO: Remove spec.js
      testPathIgnorePatterns: ['/styles/', 'src.*/*.spec.js']
    },
    {
      rootDir: './styles',
      testEnvironment: 'node'
    }
  ]
}
