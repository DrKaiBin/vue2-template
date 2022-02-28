<template>
  <div class="app-main">
    <div class="top-menu">
      <top-menu /> 
    </div>
  </div>
</template>

<script>
import TopMenu from './components/TopMenu'
export default {
  components: {
    TopMenu
  }
}
</script>

<style lang="scss">
.app-main {
  @include wh100();
}
</style>
