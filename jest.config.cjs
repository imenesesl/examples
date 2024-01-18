/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths, {
      prefix: '<rootDir>/'
    }),
    '\\.(css|scss)$': '<rootDir>/__mocks__/style-mock.js'
  },
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest',
    '\\.(scss|css)$': 'jest-transform-css'
  },
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/src/components/.*/index\\.ts$'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist',
    '/storybook-static',
    '/coverage'
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  }
};
