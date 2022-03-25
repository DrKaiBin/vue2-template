/*
 * @Description: token存获删
 * @Author: 张楷滨
 * @Date: 2022-02-28 19:09:34
 * @LastEditTime: 2022-03-25 16:56:33
 * @LastEditors: 张楷滨
 */
import Cookies from 'js-cookie'
// import store from "@/store/index";

const TokenKey = 'token'
export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken(token) {
  return Cookies.remove(TokenKey, token)
}
