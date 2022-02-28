import Vue from 'vue'
import Router from 'vue-router'
import treeDataBuilder from '@/utils/treeDataBuilder'
// 模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
Vue.use(Router)

// 路由列表
const syncRoutes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('@/views/dashboard/index'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index'),
  },
]

/**
 * 直接读取routes下的模块路由
 * 无需再次引入
 * 要求：
 * 1. 保证模块路由文件为.js
 * 2. 文件下必须export default 路由模块
 * 3. 路由写法必须正确
 * const xxRoutes = {}
 * export default xxRoutes
 */

// https://webpack.js.org/guides/dependency-management/#requirecontext
// 创建自己的上下文、在构建时在代码中解析
const routeFiles = require.context('./routes', true, /\.js$/)

const asyncRoutes = routeFiles.keys().reduce((routes, routePath) => {
  // const routeName = routePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = routeFiles(routePath)
  routes.push(value.default)
  return routes
}, [])

console.log(
  123123,
  treeDataBuilder({
    dataList: [...asyncRoutes],
    rootNode: { id: 'layout', name: '根节点' },
  })
)

// 创建路由
const createRouter = () =>
  new Router({
    scrollbarBehavior: () => ({ y: 0 }),
    routes: [...syncRoutes],
  })

const router = createRouter()

// 路由重置，常用于权限切换，改变路由
export function resetRouter() {
  const newMatchRouter = createRouter()
  router.matcher = newMatchRouter.matcher
}

export default router
