import request from '@/utils/axios'

export function getValue() {
  return request(
    {
      url: '/parameter/query',
      method: 'get',
      params: {
        hhh1: 1,
        hhh2: 2,
        hhh3: 3,
        hhh4: 4,
        hhh5: 5,
      },
    },
    {
      loading: true,
    }
  )
}

export function getValue2() {
  return request(
    {
      url: '/parameter/ssss',
      method: 'get',
      params: {
        hhh1: 1,
        hhh2: 2,
        hhh3: 3,
        hhh4: 4,
        hhh5: 5,
      },
    },
    {
      loading: true,
    }
  )
}

// 记住在做任何事情时，都需要用时间不停积累，久了你终会有一席之地。
// 想要过好生活，就需要自律，只有自律了，你才有资格去追求你向往的。
export function getInfo() {
  return request({
    url: '/vue-element-admin/user/info',
    method: 'get',
    params: {
      hhh1: 1,
      hhh2: 2,
      hhh3: 3,
      hhh4: 4,
      hhh5: 5,
    },
  })
}
