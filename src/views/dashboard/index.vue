<!--
 * @Description: 
 * @Author: 张楷滨
 * @Date: 2022-03-14 10:31:58
 * @LastEditTime: 2022-03-24 14:10:28
 * @LastEditors: 张楷滨
-->
<template>
  <div>{{ routeName }}</div>
</template>

<script>
export default {
  computed: {
    routeName() {
      return this.$route.meta.title
    },
  },
}
</script>

<style></style>
