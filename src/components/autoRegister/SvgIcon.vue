<!--
 * @Description: svg-icon,精灵图组件！可使用icon位于asset/icons下
 * @example: <svg-icon icon-class="bianji"></svg-icon>
 * @Author: 张楷滨
 * @Date: 2022-03-15 11:10:55
 * @LastEditTime: 2022-03-16 17:24:41
 * @LastEditors: 张楷滨
-->
<template>
  <svg :class="svgClass" aria-hidden="true" v-on="$listeners">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    icon: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: '',
    },
  },
  computed: {
    iconName() {
      return `#icon-${this.icon}`
    },
    svgClass() {
      if (this.className) {
        return 'svg-icon ' + this.className
      } else {
        return 'svg-icon'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.svg-icon {
  width: $icon-size;
  height: $icon-size;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  &[type='primary'] {
    color: $color-primary;
  }
  &[type='success'] {
    color: $color-success;
  }
  &[type='warning'] {
    color: $color-warning;
  }
  &[type='danger'] {
    color: $color-danger;
  }
}

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
