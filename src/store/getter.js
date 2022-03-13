/*
 * @Description: 
 * @Author: 张楷滨
 * @Date: 2022-03-13 16:56:50
 * @LastEditTime: 2022-03-13 17:02:58
 * @LastEditors: 张楷滨
 */
const getters = {
    navBarType:  state => state.config.navBarType,
    userRoutes: state => state.user.router
}
export default getters