const state = {
    name: '',
    roles: [],
    token: ''
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
    getUserInfo: ({ commit }) => {
        commit('SET_NAME', '张三')
        commit('SET_ROLES', '富豪')
        commit('SET_TOKEN', '张三的Token')
    },
}

export default {
    state,
    mutations,
    actions
}