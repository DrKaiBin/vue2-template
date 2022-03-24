<!--
 * @Description: 搜索组件
 * @Author: 张楷滨
 * @Date: 2022-03-17 18:52:52
 * @LastEditTime: 2022-03-21 11:41:13
 * @LastEditors: 张楷滨
-->

<template>
  <el-input
    v-model="inputValue"
    v-bind="$attrs"
    v-on="$listeners"
    @change="searchEvent"
    @keydown.enter="searchEvent"
  ></el-input>
</template>

<script>
export default {
  name: 'Search',
  props: {
    value: {
      type: [String, Number],
    },
  },
  data() {
    return {
      inputValue: '',
    }
  },
  methods: {
    updateValue() {
      this.$emit('update:value', this.inputValue)
    },
    searchEvent() {
      this.updateValue()
      this.$emit('search')
    },
  },
}
</script>

<style></style>
