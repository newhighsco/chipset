module.exports = {
  collectCoverageFrom: ['src/**/*.[t|j]s(x)?'],
  // TODO: replace text with text-summary
  coverageReporters: ['json', 'text'],
  projects: [
    {
      preset: 'ts-jest/presets/js-with-ts',
      globals: {
        'ts-jest': {
          diagnostics: false,
          isolatedModules: true
        }
      },
      coveragePathIgnorePatterns: ['/node_modules/', 'src.*/*.stories.*'],
      moduleNameMapper: {
        '\\.(scss)$': 'identity-obj-proxy',
        '\\.(svg)$': '<rootDir>/test/__mocks__/svg.js',
        '\\.(png|jpg|gif|eot|ttf|woff(2)?)$':
          '<rootDir>/config/jest/__mocks__/file.js'
      },
      setupFilesAfterEnv: ['<rootDir>/test/setup.js'],
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
