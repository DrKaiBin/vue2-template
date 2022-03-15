/*
 * @Description: vuecli配置
 * @Author: 张楷滨
 * @Date: 2022-03-01 10:51:34
 * @LastEditTime: 2022-03-15 11:06:33
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
  // publicPath: process.env.VUE_APP_ROOT_PATH,
  // outputDir: process.env.VUE_APP_ROOT_PATH,
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
  chainWebpack(config) {
    // 不将src/assets/icons转换为svg
    config.module.rule('svg').exclude.add(resolve('src/assets/icons')).end()
    // 将src/assets/icons转换为精灵图
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end()
  },
}
