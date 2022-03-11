/*
 * @Description:
 * @Author: 张楷滨
 * @Date: 2022-02-28 19:09:32
 * @LastEditTime: 2022-03-11 18:33:11
 * @LastEditors: 张楷滨
 */
import { getToken, setToken } from '@/utils/token'
import { login, getUserInfo, getUserRoute } from '@/api/user'

const state = {
  name: '',
  router: [],
  token: getToken(),
}

const mutations = {
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_ROUTER: (state, route) => {
    if (route == null) {
      return
    } else if (Array.isArray(route)) {
      state.router.push(...route)
    } else {
      state.router.push(route)
    }
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
}

const actions = {
  // 登录store
  login({ commit }, user) {
    return new Promise((resolve, reject) => {
      login(user)
        .then((resp) => {
          //  成功登录获取token并setToken
          const token = setToken(resp.data)
          commit('SET_TOKEN', token)
          resolve()
        })
        .catch(() => {
          reject
        })
    })
  },
  // 获取用户store
  getUserInfo: ({ commit, state }) => {
    return new Promise((resolve, reject) => {
      getUserInfo({ token: state.token })
        .then(() => {
          getUserRoute({ userId: 1 })
            .then((resp) => {
              try {
                const backGroundRouteList = resp.result
                commit('SET_NAME', '张三')
                resolve({ backGroundRouteList })
              } catch (error) {
                console.log(error)
              }
            })
            .catch(() => {
              reject()
            })
        })
        .catch(() => {
          reject()
        })
    })
  },
  addUserRoute: ({ commit }, route) => {
    console.log(123123, route)
    commit('SET_ROUTER', route)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
