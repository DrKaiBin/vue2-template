<!--
 * @Description: 
 * @Author: 张楷滨
 * @Date: 2022-03-14 10:31:58
 * @LastEditTime: 2022-03-25 11:22:20
 * @LastEditors: 张楷滨
-->
<template>
  <div>
    {{ routeName }}
    <el-button type="primary" @click="jump">跳转</el-button>
  </div>
</template>

<script>
export default {
  computed: {
    routeName() {
      return this.$route.meta.title
    },
  },
  methods: {
    jump() {
      this.$router.push('/testIndex')
    },
  },
}
</script>

<style></style>
