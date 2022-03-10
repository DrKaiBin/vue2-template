/*
 * @Description:
 * @Author: 张楷滨
 * @Date: 2022-02-28 19:08:37
 * @LastEditTime: 2022-03-09 17:09:35
 * @LastEditors: 张楷滨
 */
import request from '@/utils/axios/index'

export function login(data) {
  return request(
    {
      url: '/user/login',
      method: 'post',
      data,
    },
    { loading: true }
  )
}

export function getUserInfo(data) {
  return request({
    url: '/user/info',
    method: 'get',
    params: data,
  })
}

export function getUserRoute(params) {
  return request({
    url: '/route/userApi',
    method: 'get',
    params,
  })
}
