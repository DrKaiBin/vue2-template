<!--
 * @Description: 
 * @Author: 张楷滨
 * @Date: 2022-03-01 10:51:34
 * @LastEditTime: 2022-03-17 19:06:00
 * @LastEditors: 张楷滨
-->
<template>
  <div>
    {{ routeName }}
    <icon-button icon="bianji" type="primary"></icon-button>
    <svg-icon icon="bianji"></svg-icon>
    <search v-model="searchValue"></search>
    <el-button type="primary" @click="getValue">123123</el-button>
    <el-button type="primary" @click="alertTip">1111</el-button>
    <router-view></router-view>
  </div>
</template>

<script>
import Search from '@/components/Search.vue'
export default {
  components: {
    Search,
  },
  data() {
    return {
      searchValue: '',
    }
  },
  computed: {
    routeName() {
      return this.$route.meta.title
    },
  },
  props: {
    msg: {
      type: String,
      default: 'new message',
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
