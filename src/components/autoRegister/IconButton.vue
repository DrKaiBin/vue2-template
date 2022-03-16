<!--
 * @Description: 
 * @Author: 张楷滨
 * @Date: 2022-03-15 14:42:09
 * @LastEditTime: 2022-03-16 17:25:00
 * @LastEditors: 张楷滨
-->
<template>
  <el-tooltip placement="top" :content="iconTip">
    <el-button
      v-bind="$attrs"
      v-on="$listeners"
      :class="['icon-button', 'icon-button-' + icon]"
      :style="iconStyle"
    >
      <svg-icon :icon="icon" :icon-style="iconStyle" :type="type"></svg-icon>
    </el-button>
  </el-tooltip>
</template>

<script>
export default {
  name: 'IconButton',
  props: {
    icon: {
      type: String,
    },
    iconStyle: {
      type: Object,
    },
    type: {
      type: String,
      default: 'primary',
    },
  },
  computed: {
    iconTip() {
      return this.$t('icons.' + this.icon)
    },
  },
}
</script>

<style lang="scss" scoped>
.el-button {
  display: block;
  width: 20px;
  height: 20px;
  outline: none;
  border: none;
  padding: 0;
  background-repeat: no-repeat;
  background-size: 100%;
  background-color: transparent;
  opacity: 1;
  &:hover,
  &:active,
  &:focus {
    opacity: 0.8;
    background-color: transparent;
  }
  &.is-disabled {
    &::after {
      content: none;
    }
  }
  .svg-icon {
    width: 100%;
    height: 100%;
  }
}
</style>
