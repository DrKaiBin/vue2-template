/*
 * @Description: jest配置
 * @Author: 张楷滨
 * @Date: 2022-03-17 18:36:39
 * @LastEditTime: 2022-03-18 15:48:20
 * @LastEditors: 张楷滨
 */
module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest',
  },
  transformIgnorePatterns: ['node_modules/element-ui'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  snapshotSerializers: ['jest-serializer-vue'],
  testMatch: [
    '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)',
  ],
  collectCoverageFrom: [
    'src/utils/**/*.{js,vue}',
    '!src/utils/auth.js',
    '!src/utils/request.js',
    'src/components/**/*.{js,vue}',
  ],
  coverageDirectory: '<rootDir>/tests/unit/coverage',
  // 'collectCoverage': true,
  coverageReporters: ['lcov', 'text-summary'],
  testURL: 'http://localhost/',
}
