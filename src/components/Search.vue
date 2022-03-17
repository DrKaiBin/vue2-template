<!--
 * @Description: 搜索组件
 * @Author: 张楷滨
 * @Date: 2022-03-17 18:52:52
 * @LastEditTime: 2022-03-17 19:04:44
 * @LastEditors: 张楷滨
-->

<template>
  <el-input
    v-model="inputValue"
    v-bind="$attrs"
    v-on="$listeners"
    @change="updateValute"
  ></el-input>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
    },
  },
  data() {
    return {
      inputValue: '',
    }
  },
  methods: {
    updateValute() {
      this.$emit('update:value', this.inputValue)
    },
  },
}
</script>

<style></style>
