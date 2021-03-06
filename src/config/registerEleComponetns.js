/*
 * @Description:
 * @Author: 张楷滨
 * @Date: 2022-03-01 10:51:34
 * @LastEditTime: 2022-03-31 14:58:11
 * @LastEditors: 张楷滨
 */
// Element按需引入模块
import {
  Button,
  Select,
  Menu,
  MenuItem,
  Submenu,
  Drawer,
  Radio,
  RadioGroup,
  Tooltip,
  Input,
  ColorPicker,
  Card,
  Table,
  TableColumn,
  Scrollbar,
} from 'element-ui'
import Vue from 'vue'

// 由Element-ui主题二次生成
import '@/styles/elementUiStyle/theme/index.css'

Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 }
Vue.use(Button)
  .use(Select)
  .use(Menu)
  .use(MenuItem)
  .use(Submenu)
  .use(Drawer)
  .use(Radio)
  .use(RadioGroup)
  .use(Tooltip)
  .use(Input)
  .use(ColorPicker)
  .use(Card)
  .use(Table)
  .use(TableColumn)
  .use(Scrollbar)
