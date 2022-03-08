<!--
 * @Description: 
 * @Author: 张楷滨
 * @Date: 2022-03-08 14:39:28
 * @LastEditTime: 2022-03-08 15:48:49
 * @LastEditors: 张楷滨
-->
<template>
  <div class="base-info">
    <div class="screen-full">
      <i class="el-icon-full-screen" @click="changeScreenFull"></i>
    </div>
    <div class="user-info">
      <div class="user-icon"></div>
      <div class="user-text">admin</div>
    </div>
  </div>
</template>

<script>
import screenfull from 'screenfull'
import MessageTip from '@/utils/MessageTip'
export default {
  methods: {
    changeScreenFull() {
      if (!screenfull.isEnabled) {
        MessageTip.error('当前浏览器不支持全屏操作，请更新浏览器或更换浏览器！')
        return
      }
      if (screenfull.isEnabled && !screenfull.isFullscreen) {
        screenfull.request()
      } else {
        screenfull.exit()
      }
    },
  },
}
</script>

<style></style>
