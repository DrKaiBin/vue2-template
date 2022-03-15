<!--
 * @Description: 
 * @Author: 张楷滨
 * @Date: 2022-03-01 10:51:34
 * @LastEditTime: 2022-03-15 17:37:15
 * @LastEditors: 张楷滨
-->
<template>
  <div>
    {{ routeName }}
    <icon-button icon="bianji" type="primary"></icon-button>
    <icon-button icon="bianji" type="warning"></icon-button>
    <svg-icon icon="paihangbang"></svg-icon>
    <svg-icon icon="bianji"></svg-icon>
    <el-button type="primary" @click="getValue">123123</el-button>
    <el-button type="primary" @click="alertTip">1111</el-button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  computed: {
    routeName() {
      return this.$route.meta.title
    },
  },
  mounted() {},
  methods: {
    getValue() {},
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
