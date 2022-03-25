/*
 * @Description: 对象工具库
 * @Author: 张楷滨
 * @Date: 2022-03-25 16:57:12
 * @LastEditTime: 2022-03-25 17:04:07
 * @LastEditors: 张楷滨
 */

/**
 * @Description: 类型判断，只需传入数据与类型
 * @Author: 张楷滨
 * @Date: 2022-03-25 17:02:48
 * @LastEditTime: Do not edit
 * @LastEditors: 张楷滨
 * @param {*} data 数据
 * @param {*} type 类型
 * @return {*} boolean 布尔，true为相同，false为不同
 */
export function isType(data, type) {
  const typeObj = {
    '[object String]': 'string',
    '[object Number]': 'number',
    '[object Boolean]': 'boolean',
    '[object Null]': 'null',
    '[object Undefined]': 'undefined',
    '[object Object]': 'object',
    '[object Array]': 'array',
    '[object Function]': 'function',
    '[object Date]': 'date', // Object.prototype.toString.call(new Date())
    '[object RegExp]': 'regExp',
    '[object Map]': 'map',
    '[object Set]': 'set',
    '[object HTMLDivElement]': 'dom', // document.querySelector('#app')
    '[object WeakMap]': 'weakMap',
    '[object Window]': 'window', // Object.prototype.toString.call(window)
    '[object Error]': 'error', // new Error('1')
    '[object Arguments]': 'arguments',
  }

  let name = Object.prototype.toString.call(data) // 借用Object.prototype.toString()获取数据类型
  let typeName = typeObj[name] || '未知类型' // 匹配数据类型
  return typeName === type // 判断该数据类型是否为传入的类型
}
