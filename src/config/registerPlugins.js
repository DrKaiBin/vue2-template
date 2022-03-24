/*
 * @Description: 注册插件
 * @Author: 张楷滨
 * @Date: 2022-03-23 18:53:54
 * @LastEditTime: 2022-03-24 10:41:33
 * @LastEditors: 张楷滨
 */

import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'
// 注册文本复制插件，详细参考地址：https://github.com/Inndy/vue-clipboard2
VueClipboard.config.autoSetContainer = true
Vue.use(VueClipboard)
