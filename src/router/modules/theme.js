/*
 * @Description:
 * @Author: 张楷滨
 * @Date: 2022-03-01 10:51:34
 * @LastEditTime: 2022-03-30 14:30:29
 * @LastEditors: 张楷滨
 */
const themeRoutes = {
  theme: {
    id: 'theme',
    parentId: 'layout',
    title: '主题',
    component: () => import('@/layout/index'),
  },
  themeIndex: {
    id: 'themeIndex',
    parentId: 'theme',
    title: '主题配置',
    icon: 'theme',
    component: () => import('@/views/themeConfig/index'),
  },
  iconList: {
    id: 'iconList',
    parentId: 'theme',
    title: '图标库',
    icon: 'iconStore',
    component: () => import('@/views/themeConfig/icons/index'),
  },
  emptyStyles: {
    id: 'emptyStyles',
    parentId: 'theme',
    title: '暂无样式',
    icon: 'empty',
    component: () => import('@/views/themeConfig/Empty.vue'),
  },
  layoutTypes: {
    id: 'layoutTypes',
    parentId: 'theme',
    title: '布局类型',
    icon: 'empty',
    component: () => import('@/views/themeConfig/layout/index'),
  },
  businessLayout: {
    id: 'businessLayout',
    parentId: 'layoutTypes',
    title: '业务型布局',
    component: () => import('@/views/themeConfig/layout/BusinessLayout'),
  },
  modularLayout: {
    id: 'modularLayout',
    parentId: 'layoutTypes',
    title: '模块型布局',
    component: () => import('@/views/themeConfig/layout/ModularLayout'),
  },
}

export default themeRoutes
