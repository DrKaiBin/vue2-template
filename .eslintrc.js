/*
 * @Description: eslint配置
 * @Author: 张楷滨
 * @Date: 2022-03-17 18:38:51
 * @LastEditTime: 2022-03-18 15:13:13
 * @LastEditors: 张楷滨
 */
module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    // 'plugin:jest/recommended',
  ],
  plugins: ['vue'],
  rules: {},
}
