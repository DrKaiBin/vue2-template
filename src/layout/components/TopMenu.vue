<template>
  <div class="menu">
      <div class="simple-menu">
          <div class="simple-menu-item" v-for="item of menuRoute" :key="item.name">
              {{ item.meta.title }}
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    computed: {
        menuRoute() {
            const _routes = this.$router.options.routes.filter(item => { return !(item.meta?.hidden) })
            return _routes
        }
    },
    mounted() {
        console.log(this.menuRoute);
    }
}
</script>

<style>

</style>