/*
 * @Description:
 * @Author: 张楷滨
 * @Date: 2022-03-15 11:09:36
 * @LastEditTime: 2022-03-15 14:40:28
 * @LastEditors: 张楷滨
 */
import Vue from 'vue'
import SvgIcon from '@/components/autoRegister/SvgIcon' // svg组件

// 全局注册svg-icon
Vue.component('svg-icon', SvgIcon)

const req = require.context('./svg', true, /\.svg$/)
const requireAll = (requireContext) => requireContext.keys().map(requireContext)
requireAll(req)
