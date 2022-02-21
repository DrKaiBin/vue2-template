import Vue from 'vue'
import App from './App.vue'
import '@/styles/elementUiStyle/theme/index.css'
import { Button, Select } from 'element-ui';
Vue.use(Button)
Vue.use(Select)

import router from '@/router/index'
import store from '@/store/index'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
