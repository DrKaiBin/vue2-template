/*
 * @Description:
 * @Author: 张楷滨
 * @Date: 2022-03-01 10:51:34
 * @LastEditTime: 2022-03-10 19:32:48
 * @LastEditors: 张楷滨
 */
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
    component: () => import('@/layout/index'),
    redirect: '/dashboard',
    meta: {
      title: '主页',
    },
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: {
          title: '主页',
        },
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index'),
    meta: {
      title: '登录',
      hidden: true,
    },
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

const rolesByWeb = process.env.VUE_APP_ROLES_BY_WEB

export function getModulesRoutes(routeList = []) {
  const routeFiles = require.context('./modules', true, /\.js$/)
  // 动态获取modules中的路由
  const moduleRoutes = routeFiles.keys().reduce((routes, routePath) => {
    const value = routeFiles(routePath)
    // 前端路由生成
    if (rolesByWeb === 'true') {
      if (value.default != null) {
        const module = value.default
        const keys = Object.keys(module)
        keys.forEach((key) => {
          const element = module[key]
          // 路径设置
          if (element.parentId === 'layout') element['path'] = '/' + element.id
          else element['path'] = element.id
          // 组件名设置
          element['name'] = element.id
          // meta属性设置
          element['meta'] = {
            title: element.title ? element.title : '未设置标题',
            hidden: element.hidden ? element.hidden : false,
          }
          routes.push(element)
        })
      }
      // 后端路由生成
    } else {
      if (value.default != null) {
        const module = value.default
        routeList.forEach((item) => {
          const key = item.id
          if (module[item.id] != null) {
            const element = module[key]
            // 路径设置
            if (element.parentId === 'layout')
              element['path'] = '/' + element.id
            else element['path'] = element.id
            // 组件名设置
            element['name'] = element.id
            // meta属性设置
            element['meta'] = {
              title: element.title ? item.title : '未设置标题',
              hidden: element.hidden ? item.hidden : false,
            }
            routes.push(element)
          } else {
            console.error(`未找到组件：${item.id}`)
          }
        })
      }
    }
    return routes
  }, [])
  return moduleRoutes
}

// 获取异步路由
let asyncRoutes = []

if (rolesByWeb === 'true') {
  const tree = treeDataBuilder({
    dataList: getModulesRoutes(),
    rootNode: { id: 'layout', name: '根节点' },
  })
  asyncRoutes = tree['treeData'][0]['children']
}

// 创建路由
const createRouter = () =>
  new Router({
    scrollbarBehavior: () => ({ y: 0 }),
    routes: [...syncRoutes, ...asyncRoutes],
  })

const router = createRouter()

// 路由重置，常用于权限切换，改变路由
export function resetRouter() {
  const newMatchRouter = createRouter()
  router.matcher = newMatchRouter.matcher
}

export default router
