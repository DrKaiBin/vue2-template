/*
 * @Description:
 * @Author: 张楷滨
 * @Date: 2022-03-03 14:37:41
 * @LastEditTime: 2022-03-10 19:26:23
 * @LastEditors: 张楷滨
 */
const utilRoutes = {
  utilIndex: {
    id: 'utilIndex',
    parentId: 'layout',
    path: '/',
    title: '工具模块',
    component: () => import('@/layout/index'),
  },
  utilSafe: {
    id: 'utilSafe',
    parentId: 'utilIndex',
    title: '工具安全',
    component: () => import('@/views/dashboard/index'),
  },
}
// const utilRoutes = [
//   {
//     id: 'utilIndex',
//     parentId: 'layout',
//     path: '/',
//     title: '工具模块',
//     component: () => import('@/layout/index'),
//   },
//   {
//     id: 'utilSafe',
//     parentId: 'utilIndex',
//     title: '工具安全',
//     component: () => import('@/views/dashboard/index'),
//   },
//   {
//     id: 'utilComponent',
//     parentId: 'utilIndex',
//     title: '工具组件',
//     component: () => import('@/views/dashboard/index'),
//   },
//   {
//     id: 'utilComponent1',
//     parentId: 'utilComponent',
//     title: '工具组件',
//     component: () => import('@/views/dashboard/index'),
//   },
//   {
//     id: 'utilComponent2',
//     parentId: 'utilComponent',
//     title: '工具组件',
//     component: () => import('@/views/dashboard/index'),
//   },
//   {
//     id: 'utilComponent1-1',
//     parentId: 'utilComponent1',
//     title: '工具组件1-1',
//     component: () => import('@/views/dashboard/index'),
//   },
//   {
//     id: 'utilComponent1-2',
//     parentId: 'utilComponent1',
//     title: '工具组件1-2',
//     component: () => import('@/views/dashboard/index'),
//   },
//   {
//     id: 'utilComponent1-3',
//     parentId: 'utilComponent1',
//     title: '工具组件1-3',
//     component: () => import('@/views/dashboard/index'),
//   },
// ]

export default utilRoutes
