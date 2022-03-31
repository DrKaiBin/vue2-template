<!--
 * @Description: 
 * @Author: 张楷滨
 * @Date: 2022-03-29 16:10:26
 * @LastEditTime: 2022-03-30 14:17:48
 * @LastEditors: 张楷滨
-->
<template>
  <div class="tm-base">
    <div class="manager-layout">
      <div
        :class="[
          'manager-layout__header',
          'more',
          { 'manager-layout__header--more': showMore },
        ]"
      >
        <div class="default-condition">
          <div class="left-condition">
            <slot name="left-condition"></slot>
          </div>
          <div class="right-button">
            <slot name="right-button"></slot>
          </div>
        </div>
        <div class="more-condition">
          <slot name="more-condition"></slot>
        </div>
      </div>
      <div
        :class="[
          'manager-layout__body',
          { 'show-batch-handle': showBatchHandle },
        ]"
      >
        <div class="batch-handle">
          <slot name="batch-handle"></slot>
        </div>
        <div class="table">
          <slot name="table"></slot>
        </div>
      </div>
      <div class="manager-layout__footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showMore: {
      type: Boolean,
      default: false,
    },
    showBatchHandle: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped></style>
