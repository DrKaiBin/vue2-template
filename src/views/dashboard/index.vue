<!--
 * @Description: 
 * @Author: 张楷滨
 * @Date: 2022-03-01 10:51:34
 * @LastEditTime: 2022-03-11 18:12:59
 * @LastEditors: 张楷滨
-->
<template>
  <div>
    {{ routeName }}
    <el-button type="primary" @click="getValue">123123</el-button>
    <el-button type="primary" @click="alertTip">1111</el-button>
  </div>
</template>

<script>
import { getValue, getValue2 } from './indexApi'
export default {
  computed: {
    routeName() {
      return this.$route.meta.title
    },
  },
  mounted() {},
  methods: {
    getValue() {
      getValue()
      getValue2()
    },
    alertTip() {
      this.$message.success('66666')
    },
  },
}
</script>

<style lang="scss">
.el-button {
  width: 100px;
}
</style>
