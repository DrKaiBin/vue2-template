/*
 * @Description:
 * @Author: 张楷滨
 * @Date: 2022-02-28 19:09:07
 * @LastEditTime: 2022-03-29 16:48:37
 * @LastEditors: 张楷滨
 */
// const routes = [...syncRoutes, ...asyncRoutes]
// store.dispatch('user/addUserRoute', routes)
// import router from './index'
import { getToken } from '@/utils/token'
import store from '@/store/index'
import router, { getbackEndModulesRoutes, setMainRouteRedirect } from './index'
import treeDataBuilder from '@/utils/treeDataBuilder'

const whiteList = ['/login']
router.beforeEach(async (to, from, next) => {
  const token = getToken()
  // 获取token， 已有则免登录
  if (token) {
    // 为登录页则自动跳转到'/'

    if (to.path.indexOf('/login') !== -1) {
      next('/')
    } else {
      const hasRoles = store.state.user.name
      if (hasRoles && hasRoles !== '') {
        next()
      } else {
        try {
          // 是否已获取信息
          const userResp = await store.dispatch('user/getUserInfo')
          if (process.env.VUE_APP_ROLES_BY_WEB !== 'true') {
            const tree = treeDataBuilder({
              dataList: getbackEndModulesRoutes(userResp.backGroundRouteList),
              rootNode: { id: 0, name: '根节点' },
            })
            const treeRoutes = tree['treeData'][0]['children']
            const generateRoute = treeRoutes.map((item) => {
              item['redirect'] = setMainRouteRedirect(item, item.path)
              return item
            })
            router.addRoutes(generateRoute)
            store.dispatch('user/addUserRoute', generateRoute)
          }
          next({ ...to, replace: true })
        } catch (error) {
          console.log(error)
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
    }
  }
})
