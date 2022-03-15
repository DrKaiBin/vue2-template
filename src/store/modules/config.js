/*
 * @Description:
 * @Author: 张楷滨
 * @Date: 2022-03-02 16:50:40
 * @LastEditTime: 2022-03-15 16:46:34
 * @LastEditors: 张楷滨
 */
const state = {
  // 1: 层级顶部导航栏  2: 顶侧双边导航栏
  navBarType: 2,
  // 仅在顶侧双边导航栏生效，true为收缩， false为展开
  sidebarCollapse: true,
}
const mutations = {
  SET_NAV_BAR_TYPE(state, type) {
    state.navBarType = type
  },
  SET_SIDEBAR_COLLAPSE(state, collapse) {
    state.sidebarCollapse = collapse
  },
}
export default {
  namespaced: true,
  state,
  mutations,
}
