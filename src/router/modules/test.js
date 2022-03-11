/*
 * @Description:
 * @Author: 张楷滨
 * @Date: 2022-03-01 10:51:34
 * @LastEditTime: 2022-03-11 17:41:09
 * @LastEditors: 张楷滨
 */
const testRoutes = {
  testIndex: {
    id: 'testIndex',
    parentId: 'layout',
    title: '测试模块',
    component: () => import('@/layout/index'),
    // component: require('@/layout/index'),
  },
  testSafe: {
    id: 'testSafe',
    parentId: 'testIndex',
    title: '测试安全',
    component: () => import('@/views/dashboard/index'),
    // component: require('@/views/dashboard/index'),
  },
  testComponent1: {
    id: 'testComponent1',
    parentId: 'testIndex',
    title: '测试组件1',
    component: () => import('@/views/dashboard/index'),
  },
  testComponent2: {
    id: 'testComponent2',
    parentId: 'testIndex',
    title: '测试组件2',
    component: () => import('@/views/dashboard/index'),
  },
  testComponent3: {
    id: 'testComponent3',
    parentId: 'testIndex',
    title: '测试组件3',
    component: () => import('@/views/dashboard/index'),
  },
}

export default testRoutes
