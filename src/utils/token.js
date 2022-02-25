import Cookies from "js-cookie";
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

