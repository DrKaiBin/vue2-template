/*
 * @Description:
 * @Author: 张楷滨
 * @Date: 2022-03-16 16:38:27
 * @LastEditTime: 2022-03-16 17:19:45
 * @LastEditors: 张楷滨
 */
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { zh } from './zh'
// import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'

Vue.use(VueI18n)

const messages = {
  zh,
}
console.log(messages)
const i18n = new VueI18n({
  locale: 'zh',
  messages,
})

export { i18n }
