/*
 * @Description: vuecli配置
 * @Author: 张楷滨
 * @Date: 2022-03-01 10:51:34
 * @LastEditTime: 2022-03-15 19:07:25
 * @LastEditors: 张楷滨
 */
const path = require('path')
// 打包进度条查看
const WebpackBar = require('webpackbar')

// 是否开启编译速度时间分析
const isSpeedMeasure =
  process.env.NODE_ENV === 'production' &&
  process.env.VUE_APP_SPEED_MEASURE_WEBPACK === 'true'
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const smp = new SpeedMeasurePlugin()

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
    if (process.env.NODE_ENV === 'production') {
      plugins.push(new WebpackBar())
    }
    // 提炼为变量
    const _configureWebpack = {
      resolve: {
        alias: {
          '@': resolve('src'),
        },
      },
      plugins,
    }

    if (isSpeedMeasure) {
      return smp.wrap(_configureWebpack)
    } else {
      return _configureWebpack
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
