module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/coverage',
    '<rootDir>/dist',
  ],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub', // anything style related is ignored and mapped to jest-transform-stub module
  },
  moduleDirectories: ['<rootDir>/node_modules', '<rootDir>/src'],
  moduleNameMapper: {
    '@src/(.*)': '<rootDir>/src/$1',
    '@styles/(.*)': '<rootDir>/styles/$1',
    '@components/(.*)': '<rootDir>/components/$1',
    '@pages/(.*)': '<rootDir>/pages/$1',
    '@helpers/(.*)': '<rootDir>/helpers/$1',
    '\\.(css|less|scss|sass)$': '<rootDir>/styles/__mocks__/styleMock.js',
    // '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
};
