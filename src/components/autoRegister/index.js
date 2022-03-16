/*
 * @Description:
 * 组件自动化注册，仅在autoRegister文件夹下的组件
 * 该文件夹下的组件，在其他地方无需引入，直接使用即可
 * @Author: 张楷滨
 * @Date: 2022-03-15 14:51:04
 * @LastEditTime: 2022-03-16 14:25:34
 * @LastEditors: 张楷滨
 */
import Vue from 'vue'
import { upperFirst } from 'loadsh'
import { camelCase } from 'loadsh'

const requireComponent = require.context('.', true, /[A-Z]\w+\.(vue)$/)

requireComponent.keys().forEach((fileNmae) => {
  const componentConfig = requireComponent(fileNmae)
  const componentName = upperFirst(
    camelCase(fileNmae.replace(/^\.\/_/, '').replace(/\.\w+$/, ''))
  )
  Vue.component(componentName, componentConfig.default || componentConfig)
})
