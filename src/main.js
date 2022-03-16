/*
 * @Description:
 * @Author: 张楷滨
 * @Date: 2022-03-01 10:51:34
 * @LastEditTime: 2022-03-16 16:46:14
 * @LastEditors: 张楷滨
 */
import Vue from 'vue'
import App from './App.vue'
import '@/styles/index.scss'
import MessageTip from '@/utils/MessageTip'
import '@/router/permission'
import '@/config/registerEleComponetns'

Vue.prototype.$message = MessageTip

import router from '@/router/index'
import store from '@/store/index'

import './assets/icons' // 注册精灵图svg
import '@/components/autoRegister/index' //全局组件自动化注册

import { i18n } from '@/utils/lang'

Vue.config.productionTip = false

import '../mock/index'

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app')
