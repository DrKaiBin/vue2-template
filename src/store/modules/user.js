import { getToken, setToken } from "@/utils/token"
import { login, getUserInfo } from '@/api/user'
const state = {
    name: '',
    roles: [],
    token: getToken()
}

const mutations = {
    SET_NAME: (state, name) => {
        state.name = name
    },
    SET_ROLES: (state, roles) => {
        state.roles = roles
    },
    SET_TOKEN: (state, token) => {
        state.token = token
    }
}

const actions = {
    // 登录store
    login({ commit }, user) {
        return new Promise((resolve, reject) => {
            login(user).then(resp => {
                //  成功登录获取token并setToken
                const token = setToken(resp.data)
                commit('SET_TOKEN', token)
                resolve()
            }).catch(() => {
                reject
            })
        })
    },
    // 获取用户store
    getUserInfo: ({ commit, state }) => {
        getUserInfo({ token: state.token })
        commit('SET_NAME', '张三')
        // commit('SET_ROLES', '富豪')
        // commit('SET_TOKEN', '张三的Token')
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}