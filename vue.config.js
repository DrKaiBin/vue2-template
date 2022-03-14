/*
 * @Description: vuecli配置
 * @Author: 张楷滨
 * @Date: 2022-03-01 10:51:34
 * @LastEditTime: 2022-03-14 19:13:08
 * @LastEditors: 张楷滨
 */
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  devServer: {
    open: true,
    before: require('./mock/mock-server.js'),
  },
  publicPath: process.env.VUE_APP_ROOT_PATH,
  outputDir: 'dist',
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/styles/mixins.scss";@import "~@/styles/variables.scss";`,
      },
    },
  },
  // webpack 配置简单方式
  configureWebpack: () => {
    // 插件配置
    const plugins = []
    return {
      resolve: {
        alias: {
          '@': resolve('src'),
        },
      },
      plugins,
    }
  },
  // webpack 链式操作 (高级)
  chainWebpack() {},
}
