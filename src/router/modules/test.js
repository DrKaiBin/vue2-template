/*
 * @Description:
 * @Author: 张楷滨
 * @Date: 2022-03-01 10:51:34
 * @LastEditTime: 2022-03-10 19:25:57
 * @LastEditors: 张楷滨
 */
const testRoutes = {
  testIndex: {
    id: 'testIndex',
    parentId: 'layout',
    title: '测试模块',
    component: () => import('@/layout/index'),
  },
  testSafe: {
    id: 'testSafe',
    parentId: 'testIndex',
    title: '测试安全',
    component: () => import('@/views/dashboard/index'),
  },
}
// const testRoutes = [
//   {
//     id: 'testIndex',
//     parentId: 'layout',
//     title: '测试模块',
//     component: () => import('@/layout/index'),
//   },
//   {
//     id: 'testSafe',
//     parentId: 'testIndex',
//     title: '测试安全',
//     component: () => import('@/views/dashboard/index'),
//   },
//   {
//     id: 'testComponent',
//     parentId: 'testIndex',
//     title: '测试组件',
//     component: () => import('@/views/dashboard/index'),
//   },
//   {
//     id: 'testComponent1',
//     parentId: 'testComponent',
//     title: '测试组件',
//     component: () => import('@/views/dashboard/index'),
//   },
//   {
//     id: 'testComponent2',
//     parentId: 'testComponent',
//     title: '测试组件',
//     component: () => import('@/views/dashboard/index'),
//   },
//   {
//     id: 'testComponent1-1',
//     parentId: 'testComponent1',
//     title: '测试组件1-1',
//     component: () => import('@/views/dashboard/index'),
//   },
//   {
//     id: 'testComponent1-2',
//     parentId: 'testComponent1',
//     title: '测试组件1-2',
//     component: () => import('@/views/dashboard/index'),
//   },
//   {
//     id: 'testComponent1-3',
//     parentId: 'testComponent1',
//     title: '测试组件1-3',
//     component: () => import('@/views/dashboard/index'),
//   },
// ]

export default testRoutes
