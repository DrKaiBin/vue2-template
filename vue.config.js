/*
 * @Description: vuecli配置
 * @Author: 张楷滨
 * @Date: 2022-03-01 10:51:34
 * @LastEditTime: 2022-03-23 15:33:26
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

// 是否开启打包模块大小分析
const isBundleAnalyzer =
  process.env.NODE_ENV === 'production' &&
  process.env.VUE_APP_BUNDLE_ANALYZER_PLUGIN === 'true'
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const isMock =
  process.env.NODE_ENV === 'development' &&
  process.env.VUE_APP_USE_MOCK === 'true'

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    open: true,
    before: isMock ? require('./mock/mock-server.js') : '',
  },
  // publicPath: process.env.VUE_APP_ROOT_PATH,
  // outputDir: process.env.VUE_APP_ROOT_PATH,
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/styles/mixins.scss";@import "~@/styles/variables.scss";`,
      },
    },
  },
  // 生产环境取消map
  productionSourceMap: false,
  // webpack 配置简单方式
  configureWebpack: () => {
    // 插件配置
    const plugins = []
    if (process.env.NODE_ENV === 'production') {
      plugins.push(new WebpackBar())
    }
    if (isBundleAnalyzer) {
      plugins.push(new BundleAnalyzerPlugin())
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
    // 切割代码，提取公共代码
    config.optimization.splitChunks({
      chunks: 'all',
      cacheGroups: {
        libs: {
          name: 'chunk-libs',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: 'initial', // only package third parties that are initially dependent
        },
        elementUI: {
          name: 'chunk-elementUI', // split elementUI into a single package
          priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
          test: /[\\/]node_modules[\\/]_?element-ui(.*)/, // in order to adapt to cnpm
        },
        loadsh: {
          name: 'chunk-lodsh',
          priority: 20,
          test: /[\\/]node_modules[\\/]_?loadsh(.*)/,
        },
      },
    })
  },
}
