import Vue from 'vue'
import App from './App.vue'
import '@/styles/elementUiStyle/theme/index.css'
import '@/styles/index.scss'
import { Button, Select } from 'element-ui'
import MessageTip from '@/utils/MessageTip'
import '@/router/permission'
Vue.use(Button)
Vue.use(Select)

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
