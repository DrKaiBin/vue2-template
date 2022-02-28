import router from './index'
import { getToken } from '@/utils/token'
const whiteList = ['/login', '/auth-redirect']
router.beforeEach((to, from, next) => {
  const token = getToken()
  // 获取token， 已有则免登录
  if (token) {
    // 为登录页则自动跳转到'/'
    if (to.path.indexOf('/login') !== -1) {
      next('/')
    } else {
      // 是否已获取信息
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
