<template>
  <tier-menu
    :routes="menuRoutes"
    :navBarType="navBarType"
    mode="horizontal"
    :default-active="defaultOpeneds"
    router
    @select="changeTopMenuItem"
  ></tier-menu>
</template>

<script>
import TierMenu from './TierMenu'
export default {
  components: {
    TierMenu,
  },
  props: {
    menuRoutes: {
      type: [Array, Object, undefined],
    },
    defaultOpeneds: {
      type: [String],
    },
    navBarType: {
      type: [Number],
    },
  },
  methods: {
    changeTopMenuItem(indexPath) {
      this.$emit('select', indexPath)
    },
  },
}
</script>

<style></style>
