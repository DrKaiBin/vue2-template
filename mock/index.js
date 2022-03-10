/*
 * @Description:
 * @Author: 张楷滨
 * @Date: 2022-02-23 10:43:32
 * @LastEditTime: 2022-03-09 16:36:13
 * @LastEditors: 张楷滨
 */
const user = require('./modules/user')
const route = require('./modules/route')

const mocks = [...user, ...route]

module.exports = {
  mocks,
}
