import Vue from 'vue'
import App from './App.vue'
import '@/styles/index.scss'
import MessageTip from '@/utils/MessageTip'
import '@/router/permission'
import '@/config/registerEleComponetns'

Vue.prototype.$message = MessageTip

import router from '@/router/index'
import store from '@/store/index'

Vue.config.productionTip = false

import '../mock/index'

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
