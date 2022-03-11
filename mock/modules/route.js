/*
 * @Description:
 * @Author: 张楷滨
 * @Date: 2022-03-09 15:49:42
 * @LastEditTime: 2022-03-11 16:51:28
 * @LastEditors: 张楷滨
 */
const routes = {
  1: [
    {
      id: 1,
      parentId: 0,
      name: 'testIndex',
      title: '测试模块',
      // component: () => import('@/layout/index'),
    },
    {
      id: 4,
      parentId: 1,
      name: 'testSafe',
      title: '测试组件',
      // component: () => import('@/views/dashboard/index'),
    },
    {
      id: 5,
      parentId: 4,
      name: 'testComponent1',
      title: '测试组件1-1',
      // component: () => import('@/views/dashboard/index'),
    },
    {
      id: 6,
      parentId: 4,
      name: 'testComponent2',
      title: '测试组件1-2',
      // component: () => import('@/views/dashboard/index'),
    },
    {
      id: 7,
      parentId: 4,
      name: 'testComponent3',
      title: '测试组件1-3',
      // component: () => import('@/views/dashboard/index'),
    },
  ],
}

const routeApi = [
  {
    url: '/route/userApi',
    type: 'get',
    response: (config) => {
      const { userId } = config.query
      return {
        result: routes[userId],
      }
    },
  },
]

module.exports = routeApi
