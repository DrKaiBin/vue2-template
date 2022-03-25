/*
 * @Description:
 * @Author: 张楷滨
 * @Date: 2022-03-01 10:51:34
 * @LastEditTime: 2022-03-25 18:01:27
 * @LastEditors: 张楷滨
 */
import Vue from 'vue'
import App from './App.vue'
import '@/styles/index.scss'
import MessageTip from '@/utils/MessageTip'
import '@/router/permission'
import '@/config/registerEleComponetns'
import '@/config/registerPlugins'

Vue.prototype.$message = MessageTip

import router from '@/router/index'
import store from '@/store/index'

import './assets/icons' // 注册精灵图svg
import '@/components/autoRegister/index' //全局组件自动化注册
import '@/config/derective/index'

import { i18n } from '@/utils/lang'

Vue.config.productionTip = false

if (
  process.env.NODE_ENV === 'development' &&
  process.env.VUE_APP_USE_MOCK === 'true'
) {
  import('../mock/index')
}
new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app')
