<!--
 * @Description: 顶部栏左侧logo
 * @Author: 张楷滨
 * @Date: 2022-03-08 18:56:15
 * @LastEditTime: 2022-03-08 19:21:08
 * @LastEditors: 张楷滨
-->
<template>
  <div class="logo-container">
    <div class="company-logo"></div>
    <div class="project-text">{{ projectTitle }}</div>
  </div>
</template>

<script>
import { projectTitle } from '../../../../public/config/config'
export default {
  computed: {
    projectTitle() {
      return process.env.NODE_ENV === 'production'
        ? projectTitle == null
          ? process.env.VUE_APP_PROJECT_TITLE
          : projectTitle
        : process.env.VUE_APP_PROJECT_TITLE
    },
  },
}
</script>

<style></style>
