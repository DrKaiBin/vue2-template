/*
 * @Description:
 * @Author: 张楷滨
 * @Date: 2022-03-09 15:49:42
 * @LastEditTime: 2022-03-13 18:21:36
 * @LastEditors: 张楷滨
 */
const routes = {
  1: [
    {
      id: 1,
      parentId: 0,
      name: 'testIndex',
      title: '测试模块'
    },
    {
      id: 4,
      parentId: 1,
      name: 'testSafe',
      title: '测试组件'
    },
    {
      id: 5,
      parentId: 4,
      name: 'testComponent1',
      title: '测试组件1-1'
    },
    {
      id: 6,
      parentId: 4,
      name: 'testComponent2',
      title: '测试组件1-2'
    },
    {
      id: 7,
      parentId: 4,
      name: 'testComponent3',
      title: '测试组件1-3'
    },
    {
      id: 10,
      parentId: 0,
      name: 'utilIndex',
      title: '工具模块'
    },
    {
      id: 11,
      parentId: 10,
      name: 'utilSafe',
      title: '工具安全'
    },
  ]
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
