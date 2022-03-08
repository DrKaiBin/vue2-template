<!--
 * @Description: 
 * 侧边栏：
 * 当导航栏为顶侧双边时，且存在两个以上的子路由，则出现侧边栏，否则隐藏
 * @Author: 张楷滨
 * @Date: 2022-03-07 11:26:35
 * @LastEditTime: 2022-03-08 11:37:41
 * @LastEditors: 张楷滨
-->
<template>
  <tier-menu
    :routes="sideRoutes"
    :navBarType="1"
    :default-active="defaultOpeneds"
    mode="vertical"
    router
  ></tier-menu>
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
  },
}
</script>

<style></style>
