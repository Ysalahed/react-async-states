/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', 'src', '<rootDir>/..'],
  transform: {
    '^.+\\.ts$':  ['ts-jest', {tsConfig: '<rootDir>/tsconfig.test.json'}],
    '^.+\\.js$':  'babel-jest',
    '^.+\\.mjs$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '@core': '<rootDir>/../core/src/'
  },
  coveragePathIgnorePatterns: [
    "__tests__",
    "index-prod.js",
    "configuration-warn",
    "type*.ts"
  ],
  testMatch: [
    "**/*.test.js",
    "**/*.test.ts",
    "**/*.test.tsx"
  ],
};
