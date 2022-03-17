/*
 * @Description: eslint配置
 * @Author: 张楷滨
 * @Date: 2022-03-17 18:38:51
 * @LastEditTime: 2022-03-17 19:26:52
 * @LastEditors: 张楷滨
 */
module.exports = {
  env: {
    // browser: true,
    // es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    'plugin:jest/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {},
}
