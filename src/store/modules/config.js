const state = {
  // 1: 层级顶部导航栏  2: 顶册双边导航栏
  navBarType: 2,
}
const mutations = {
  SET_NAV_BAR_TYPE(state, type) {
    state.navBarType = type
  },
}
export default {
  namespaced: true,
  state,
  mutations,
}
