module.exports = {
  preset: 'jest-preset-angular',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/projects/bus/src'],
  testMatch: ['**/?(*.)+(spec|test).ts'],
  setupFiles: ['<rootDir>/jest.setup.ts'],
  setupFilesAfterEnv: ['jest-extended'],
  transform: {
    '^.+\\.(ts|html)$': 'ts-jest',
    '^.+\\.js$': 'babel-jest'
  },
  transformIgnorePatterns: ['node_modules/(?!(.*\\.mjs$))'],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/projects/bus/src/$1'
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'projects/bus/src/**/*.ts',
    '!projects/bus/src/**/*.module.ts',
    '!projects/bus/src/main.ts',
    '!projects/bus/src/**/*.spec.ts',
    '!projects/bus/src/polyfills.ts'
  ],
  coverageDirectory: '<rootDir>/coverage/bus',
  coverageReporters: ['html', 'lcov', 'text-summary']
};
