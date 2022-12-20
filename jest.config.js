module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
  // Whether to use watchman for file crawling
  // watchman: true,
}
