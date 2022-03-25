/*
 * @Description:
 * @Author: 张楷滨
 * @Date: 2022-03-14 10:31:58
 * @LastEditTime: 2022-03-25 16:41:56
 * @LastEditors: 张楷滨
 */
/*
 * @Description:
 * 路由封装
 * env下：
 * VUE_APP_ROLES_BY_WEB
 * 为'true'时，直接渲染modules的路由
 * 为'false'时，获取后台路由，并通过addroutes渲染路由（可参考mock/modules/route文件返回的格式）
 * @Author: 张楷滨
 * @Date: 2022-03-01 10:51:34
 * @LastEditTime: 2022-03-14 11:16:48
 * @LastEditors: 张楷滨
 */
import Vue from 'vue'
import Router from 'vue-router'
import treeDataBuilder from '@/utils/treeDataBuilder'
import store from '@/store/index'
import { cloneDeep } from 'loadsh'
// 模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
Vue.use(Router)

// 路由列表
export const syncRoutes = [
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
    path: '/theme',
    name: 'Theme',
    component: () => import('@/layout/index'),
    redirect: '/theme/themeConfig',
    meta: {
      title: '主题',
    },
    children: [
      {
        path: 'themeConfig',
        name: 'ThemeConfig',
        component: () => import('@/views/themeConfig/index'),
        meta: {
          title: '主题配置',
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

// 获取异步路由
export let asyncRoutes = []

const rolesByWeb = process.env.VUE_APP_ROLES_BY_WEB
/**
 * @Description: 设置主路由重定向
 * @Author: 张楷滨
 * @Date: 2022-03-13 17:06:57
 * @LastEditTime: Do not edit
 * @LastEditors: 张楷滨
 * @param {*} route
 */
export function setMainRouteRedirect(route, basePath = '') {
  let path = route.path === '/' ? '' : route.path
  if (basePath !== '') path = basePath
  if (route.children != null) {
    const fristChild = route.children.find((child) => {
      return !child.meta?.hidden
    })
    if (fristChild != null) path += '/' + fristChild.path
    if (fristChild.children) path = setMainRouteRedirect(fristChild, path)
  }
  return path
}

/**
 * @Description: 获取路由， 此方法仅适用于前端路由。VUE_APP_ROLES_BY_WEB=true
 * @Author: 张楷滨
 * @Date: 2022-03-11 11:49:53
 * @LastEditTime: Do not edit
 * @LastEditors: 张楷滨
 */
export function getWebModulesRoutes() {
  const routeFiles = require.context('./modules', true, /\.js$/)
  // 动态获取modules中的路由
  const moduleRoutes = routeFiles.keys().reduce((routes, routePath) => {
    const value = routeFiles(routePath)
    if (value.default != null) {
      const module = value.default
      const keys = Object.keys(module)
      keys.forEach((key) => {
        const element = module[key]
        // 路径设置
        if (element.parentId === 'layout') {
          element['path'] = '/' + element.id
        } else {
          element['path'] = element.id
        }
        // 组件名设置
        element['name'] = key
        // meta属性设置
        element['meta'] = {
          title: element.title ? element.title : '未设置标题',
          hidden: element.hidden ? element.hidden : false,
        }
        routes.push(element)
      })
    }
    return routes
  }, [])
  return moduleRoutes
}

/**
 * @Description: 获取后台路由
 * @Author: 张楷滨
 * @Date: 2022-03-13 16:50:22
 * @LastEditTime: Do not edit
 * @LastEditors: 张楷滨
 * @param {*} backGroundRouteList 后端路由,必须为数组
 * @example:
    [
      {
        id: 1, // 路由id
        parentId: 0, // 父节点，默认0为layout
        name: 'testIndex', // 路由名称，映射route/modules中的路由，获取组件
        title: '测试模块', // 渲染到菜单栏上的标题
      }
    ]
 */
export function getbackEndModulesRoutes(backGroundRouteList = []) {
  if (!Array.isArray(backGroundRouteList)) return []
  const routeFiles = require.context('./modules', true, /\.js$/)

  // 动态获取modules中的路由,将所有路由存放于moduleRoutes
  const moduleRoutes = routeFiles.keys().reduce((routes, routePath) => {
    const value = routeFiles(routePath)
    if (value.default != null) {
      const module = value.default
      const keys = Object.keys(module)
      keys.forEach((key) => {
        routes[key] = cloneDeep(module[key])
      })
    }
    return routes
  }, {})
  const generateRoute = []
  // 通过后台权限，映射对应路由组件
  backGroundRouteList.forEach((item) => {
    const key = item.name
    if (moduleRoutes[key] != null) {
      const element = moduleRoutes[key]

      let newELement = Object.assign(cloneDeep(element), item)
      // 路径设置
      if (item.parentId === 0) newELement['path'] = '/' + item.name
      else newELement['path'] = item.name
      // meta属性设置
      newELement['meta'] = {
        title: element.title ? item.title : '未设置标题',
        hidden: newELement.hidden ? newELement.hidden : false,
      }
      generateRoute.push(newELement)
    } else {
      console.error(
        `未找到组件${item.name}, 请检查前端是否路由模块中是否包含该组件`
      )
    }
  })
  return generateRoute
}

// 当为前端路由时，直接生成
if (rolesByWeb === 'true') {
  const tree = treeDataBuilder({
    dataList: getWebModulesRoutes(),
    rootNode: { id: 'layout', name: '根节点' },
  })
  const treeRoutes = tree['treeData'][0]['children']
  asyncRoutes = treeRoutes.map((item) => {
    item['redirect'] = setMainRouteRedirect(item, item.path)
    return item
  })
}

// 创建路由
const createRouter = () => {
  store.dispatch('user/addUserRoute', [...syncRoutes, ...asyncRoutes])
  return new Router({
    scrollbarBehavior: () => ({ y: 0 }),
    routes: [...syncRoutes, ...asyncRoutes],
  })
}

const router = createRouter()

// 路由重置，常用于权限切换，改变路由
export function resetRouter() {
  const newMatchRouter = createRouter()
  router.matcher = newMatchRouter.matcher
}

export default router
