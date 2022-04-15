<!--
 * @Description: 
 * @Author: 张楷滨
 * @Date: 2022-03-29 16:10:26
 * @LastEditTime: 2022-04-01 16:49:08
 * @LastEditors: 张楷滨
-->
<template>
  <div class="tm-base">
    <div class="modular-layout">
      <div class="modular-layout-item"></div>
      <div class="modular-layout-item"></div>
      <div class="modular-layout-item"></div>
      <div class="modular-layout-item"></div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.tm-base {
  .modular-layout {
    .modular-layout-item {
      width: calc(50% - $padding-base * 6);
      height: calc(50% - $padding-base * 6);
    }
  }
}
</style>
