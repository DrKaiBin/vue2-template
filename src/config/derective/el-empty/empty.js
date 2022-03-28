/*
 * @Description: 缺省指令
 * @Author: 张楷滨
 * @Date: 2022-03-25 16:55:44
 * @LastEditTime: 2022-03-28 17:28:19
 * @LastEditors: 张楷滨
 */
import { isType } from '@/utils/objUtils'
const emptyMap = new Map()
const req = require.context('@/assets/backgrounds/empty', false, /\.svg$/)
const list = req.keys()

list.forEach((element) => {
  const iArr = element.split('/')
  const fileFullName = iArr[1]
  const module = require('@/assets/backgrounds/empty/' + fileFullName)
  const fileName = fileFullName.split('.svg')[0]
  emptyMap.set(fileName, module)
})

/**
 * @Description: v-empty指令编写
 * @Author: 张楷滨
 * @Date: 2022-03-25 17:23:06
 * @LastEditTime: Do not edit
 * @LastEditors: 张楷滨
 * @param {*} bind:value: 数组的长度，为null、undefined、0
 * @param {*} bind:expression: 变量名，将其设置为id，监听其数据变化
 * @param {*} bind:expression: 缺省图标类型
 */
export default {
  bind(el, binding) {
    el.style.position = 'relative'
    const value = binding.value
    const isNumber = isType(binding.value, 'number')
    const nodeId = binding.expression + binding.arg
    if (!isNumber || value === 0) {
      setEmptyDom(el, nodeId, binding.arg)
    } else {
      removeEmptyDom(el, nodeId)
    }
  },
  update(el, binding) {
    const value = binding.value

    const isNumber = isType(binding.value, 'number')
    const nodeId = binding.expression + binding.arg
    if (!isNumber || value === 0) {
      setEmptyDom(el, nodeId, binding.arg)
    } else {
      removeEmptyDom(el, nodeId)
    }
  },
}

/**
 * @Description: 设置在那屋节点
 * 暂无节点：若已有暂无节点则直接显示、无则建立节点
 * 节点Id、class均通过使用指令bind.expression + binding.arg设置
 * id: bind.expression + binding.arg
 * class: (bind.expression + binding.arg)--empty
 * @Author: 张楷滨
 * @Date: 2022-03-25 17:25:12
 * @LastEditTime: Do not edit
 * @LastEditors: 张楷滨
 * @param {*} el 父元素
 * @param {*} nodeId 节点ID
 * @param {*} nodeType 节点类型
 */
function setEmptyDom(el, nodeId, nodeType) {
  if (el == null) {
    console.log('错误： 【v-el-empty】 el is undefined')
    return
  }
  if (nodeId == null) {
    console.log('错误： 【v-el-empty】 nodeId is undefined')
    return
  }
  if (nodeType == null || nodeType === '') {
    nodeType = 'empty'
  }

  // 隐藏在那屋节点的兄弟节点
  const brotherNodes = Array.from(el.children)
  brotherNodes.forEach((item) => {
    if (item.id !== nodeId) item.style.opacity = 0
  })

  // 是否已经建立节点
  const hasEmptyDom = document.getElementById(nodeId)
  if (hasEmptyDom == null) {
    const currentEmptyType = emptyMap.get(nodeType)
    const emptyDom = document.createElement('div')
    emptyDom.id = nodeId
    emptyDom.classList.add('is-empty')
    emptyDom.classList.add('position-center')
    emptyDom.classList.add(nodeId + '--empty')
    emptyDom.style.backgroundImage = 'url(' + currentEmptyType + ')'
    el.appendChild(emptyDom)
  } else {
    hasEmptyDom.style.opacity = 1
  }
}

// 隐藏暂无节点
function removeEmptyDom(el, nodeId) {
  const emptyDom = document.getElementById(nodeId)
  emptyDom.style.opacity = 0
  // 展示在那屋节点的兄弟节点
  const brotherNodes = Array.from(el.children)
  brotherNodes.forEach((item) => {
    if (item.id !== nodeId) {
      item.style.opacity = 1
    }
  })
}
