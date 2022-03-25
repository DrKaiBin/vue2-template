/*
 * @Description: 暂无指令
 * @Author: 张楷滨
 * @Date: 2022-03-25 16:55:21
 * @LastEditTime: 2022-03-25 17:59:52
 * @LastEditors: 张楷滨
 */
import empty from './empty'

const install = function (Vue) {
  Vue.directive('el-empty', empty)
}

if (window.Vue) {
  window['el-empty'] = empty
  //  eslint-disable-next-line no-undef
  Vue.use(install)
}

empty.install = install
export default empty
