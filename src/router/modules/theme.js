/*
 * @Description:
 * @Author: 张楷滨
 * @Date: 2022-03-01 10:51:34
 * @LastEditTime: 2022-03-29 14:34:30
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
}

export default themeRoutes
