// const testRoutes = {
//   testIndex: {
//     id: 'testIndex',
//     parentId: 'layout',
//     path: '/',
//     component: () => import('@/views/dashboard/index'),
//   },
//   testSafe: {
//     // id: 'testSafe',
//     parentId: 'testIndex',
//     // path: '/testSafe',
//     component: () => import('@/views/dashboard/index'),
//   },
//   testComponent: {
//     // id: 'testComponent',
//     parentId: 'testIndex',
//     // path: '/testComponent',
//     component: () => import('@/views/dashboard/index'),
//   }
// }

const testRoutes = [
  {
    id: 'testIndex',
    parentId: 'layout',
    path: '/',
    title: '测试模块',
    component: () => import('@/layout/index'),
  },
  {
    id: 'testSafe',
    parentId: 'testIndex',
    title: '测试安全',
    component: () => import('@/views/dashboard/index'),
  },
  {
    id: 'testComponent',
    parentId: 'testIndex',
    title: '测试组件',
    component: () => import('@/views/dashboard/index'),
  },
]

export default testRoutes
