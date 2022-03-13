/*
 * @Description:
 * @Author: 张楷滨
 * @Date: 2022-03-03 14:37:41
 * @LastEditTime: 2022-03-13 18:18:19
 * @LastEditors: 张楷滨
 */

const utilRoutes = {
  utilIndex: {
    id: 'utilIndex',
    parentId: 'layout',
    title: '工具模块',
    component: () => import('@/layout/index')
  },
  utilSafe: {
    id: 'utilSafe',
    parentId: 'utilIndex',
    title: '工具安全',
    component: () => import('@/views/dashboard/index')
  },
}

export default utilRoutes
