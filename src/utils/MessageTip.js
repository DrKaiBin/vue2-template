/**
 * @description 全局Message：信息提示，默认只出现一个，关于信息提示，请使用此工具
 * @param msg 提示信息
 * @param otherOptions Message组件的option, 参考网址(https://element.eleme.cn/#/zh-CN/component/message)
 * @suggestion 建议挂在至全局, Vue.prototype.$message = MessageTip
 * @example
 * import使用
 * 1：MessageTip.success('新增成功')
 * 2：MessageTip.warning('不允许删除', {
 *      customClass: '' // 添加class
 *      showClose: false
 *    })
 * 挂在全局使用
 * this.$message.success("66666");
 * this.$message.warning("66666");
 * this.$message.info("66666");
 * this.$message.error("66666");
 **/
import { Message } from 'element-ui'
import { cloneDeep } from 'loadsh/cloneDeep'

function MessageTip() {}

// 基础配置
const baseOptions = {
  showClose: true,
  duration: 2000,
}

/**
 * @description 状态: 成功提示
 **/
MessageTip.success = (msg, otherOptions) => {
  const baseOpt = cloneDeep(baseOptions)
  const msgOpt = Object.assign(
    baseOpt,
    {
      message: msg,
      type: 'success',
    },
    otherOptions
  )

  Message(msgOpt)
}

/**
 * @description 状态: 警告提示
 **/
MessageTip.warning = (msg, otherOptions) => {
  const baseOpt = cloneDeep(baseOptions)
  const msgOpt = Object.assign(
    baseOpt,
    {
      message: msg,
      type: 'warning',
    },
    otherOptions
  )
  Message(msgOpt)
}

/**
 * @description 状态: 信息提示
 **/
MessageTip.info = (msg, otherOptions) => {
  const baseOpt = cloneDeep(baseOptions)
  const msgOpt = Object.assign(
    baseOpt,
    {
      message: msg,
      type: 'info',
    },
    otherOptions
  )
  Message(msgOpt)
}

/**
 * @description 状态: 错误提示
 **/
MessageTip.error = (msg, otherOptions) => {
  const baseOpt = cloneDeep(baseOptions)
  const msgOpt = Object.assign(
    baseOpt,
    {
      message: msg,
      type: 'error',
    },
    otherOptions
  )
  Message(msgOpt)
}

export default MessageTip
