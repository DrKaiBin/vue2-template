/*
 * @Description: 工具模块
 * @Author: 张楷滨
 * @Date: 2022-03-03 14:37:41
 * @LastEditTime: 2022-03-15 16:39:26
 * @LastEditors: 张楷滨
 */

const utilRoutes = {
  utilIndex: {
    id: 'utilIndex',
    parentId: 'layout',
    title: '工具模块',
    component: () => import('@/layout/index'),
  },
  utilSafe: {
    id: 'utilSafe',
    parentId: 'utilIndex',
    title: '工具安全',
    icon: 'wallet',
    component: () => import('@/views/dashboard/index'),
  },
  utilSafe1: {
    id: 'utilSafe1',
    parentId: 'utilSafe',
    title: '工具安全1',
    icon: 'wallet',
    component: () => import('@/views/dashboard/index'),
  },
  utilSafe2: {
    id: 'utilSafe2',
    parentId: 'utilSafe',
    title: '工具安全2',
    component: () => import('@/views/dashboard/index'),
  },
  util666: {
    id: 'util666',
    parentId: 'utilIndex',
    title: '工具666',
    hidden: true,
    component: () => import('@/views/dashboard/index'),
  },
}

export default utilRoutes
