<template>
  <div>
    <el-button type="primary" @click="getValue">123123</el-button>
    <el-button type="primary" @click="alertTip">1111</el-button>
    <router-view></router-view>
  </div>
</template>

<script>
import { getValue, getValue2 } from './indexApi'
export default {
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
