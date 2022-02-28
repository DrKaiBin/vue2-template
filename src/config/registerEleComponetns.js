// Element按需引入模块
import { Button, Select } from 'element-ui'
import Vue from 'vue'

// 由Element-ui主题二次生成
import '@/styles/elementUiStyle/theme/index.css'

Vue.use(Button).use(Select)