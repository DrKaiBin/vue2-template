<!--
 * @Description: 
 * 侧边栏：
 * 当导航栏为顶侧双边时，且存在两个以上的子路由，则出现侧边栏，否则隐藏
 * @Author: 张楷滨
 * @Date: 2022-03-07 11:26:35
 * @LastEditTime: 2022-03-15 17:38:17
 * @LastEditors: 张楷滨
-->
<template>
  <div class="side-menu">
    <tier-menu
      :routes="sideRoutes"
      :navBarType="1"
      :default-active="defaultOpeneds"
      :collapse="collapse"
      mode="vertical"
      router
    ></tier-menu>
    <div class="collapse-box">
      <svg-icon
        class="collapse-icon"
        icon="navCollapse"
        @click="changeCollapse"
      ></svg-icon>
    </div>
  </div>
</template>

<script>
import TierMenu from './TierMenu'
export default {
  components: {
    TierMenu,
  },
  props: {
    sideRoutes: {
      type: [Array, Object, undefined],
      default: () => {
        return []
      },
    },
    defaultOpeneds: {
      type: [String],
    },
    collapse: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    changeCollapse() {
      this.$store.commit('config/SET_SIDEBAR_COLLAPSE', !this.collapse)
    },
  },
}
</script>

<style></style>
