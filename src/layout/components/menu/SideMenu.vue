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
