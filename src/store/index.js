import Vue from 'vue'
import Vuex from 'vuex'
// 模块化机制编程，导入Vue和Vue，要调用 Vue.use(Vuex)
Vue.use(Vuex)

/**
 * 直接读取modules下的状态模块
 * 无需再次引入
 * 要求：
 * 1. 保证模块路由文件为.js
 * 2. 文件下必须export default 状态模块
 * 3. 路由写法必须正确
 * const xxModules = {}
 * export default xxModules
 */

// https://webpack.js.org/guides/dependency-management/#requirecontext
// 创建自己的上下文、在构建时在代码中解析
const moduleFiles = require.context('./modules', true, /\.js$/)

const modules = moduleFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = moduleFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

// 创建状态管理模式
const store = new Vuex.Store({
  modules,
  actions: {
    test() {},
  },
})

export default store
