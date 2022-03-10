/*
 * @Description:
 * @Author: 张楷滨
 * @Date: 2022-02-28 19:09:07
 * @LastEditTime: 2022-03-10 19:24:33
 * @LastEditors: 张楷滨
 */
import router from './index'
import { getToken } from '@/utils/token'
import store from '@/store/index'
const whiteList = ['/login']
router.beforeEach(async (to, from, next) => {
  const token = getToken()
  // 获取token， 已有则免登录
  if (token) {
    // 为登录页则自动跳转到'/'
    if (to.path.indexOf('/login') !== -1) {
      next('/')
    } else {
      try {
        // 是否已获取信息
        const userResp = await store.dispatch('user/getUserInfo')
        console.log(233, userResp)
      } catch (error) {
        console.log(error)
      }
      next()
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
    }
  }
})
