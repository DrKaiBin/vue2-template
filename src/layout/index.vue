<template>
  <div class="app-main">
    <div class="header">
      <div class="menu" :key="navBarType">
        <tier-menu
          :routes="menuRoutes"
          :navBarType="navBarType"
          mode="horizontal"
          :default-active="defaultOpeneds"
          router
          @select="changeTopMenuItem"
        ></tier-menu>
      </div>
      <div class="config">
        <el-button type="primary" @click="openConfigDrawer">配置</el-button>
      </div>
    </div>
    <div class="body">
      <div class="side-menu" :key="navBarType === 2 && sideRoute.length >= 1">
        <tier-menu
          :routes="sideRoute"
          :navBarType="1"
          :default-active="defaultOpeneds"
          class="side-menu"
          mode="vertical"
          router
        ></tier-menu>
      </div>
      <div
        :class="[
          'render-view',
          { 'has-side-menu': !(navBarType === 2 && sideRoute.length >= 1) },
        ]"
      >
        <router-view></router-view>
      </div>
    </div>

    <config-drawer ref="configDrawer"></config-drawer>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TierMenu from './components/menu/TierMenu'
import ConfigDrawer from './components/config/ConfigDrawer.vue'
import { cloneDeep } from 'loadsh'
export default {
  components: {
    TierMenu,
    ConfigDrawer,
  },
  data() {
    return {
      sideRoute: [],
      defaultOpeneds: '/',
      defaultOpendFrist: '',
    }
  },
  computed: {
    menuRoutes() {
      const _routes = this.$router.options.routes.filter((item) => {
        if (!item.meta?.hidden) {
          item.redirect = this.setMainRouteRedirect(item)
        }
        return !item.meta?.hidden
      })
      console.log(_routes)
      return _routes
    },
    ...mapState({
      navBarType: (state) => state.config.navBarType,
    }),
  },
  created() {
    this.changeTopMenuItem(this.$route.path, false)
  },
  methods: {
    setMainRouteRedirect(route) {
      let path = route.path === '/' ? '' : route.path
      const fristChild = route.children.find((child) => {
        return !child.meta?.hidden
      })
      path += '/' + fristChild.path
      if (fristChild.children && fristChild.length > 0)
        return this.setMainRouteRedirect(fristChild)
      return path
    },
    openConfigDrawer() {
      this.$refs['configDrawer'].openConfigDrawer()
    },
    changeTopMenuItem(indexPath) {
      if (this.navBarType === 2) {
        const _currentMenuRoute = this.menuRoutes.find((route) => {
          if (route.path !== '' || route.path !== '/') {
            const basePath = indexPath.split('/')
            return route.path.indexOf(basePath[1]) !== -1
          }
        })

        let hasSide = 0
        let currentMenuRoute
        if (_currentMenuRoute && _currentMenuRoute.children) {
          currentMenuRoute = cloneDeep(_currentMenuRoute)
          currentMenuRoute.children.map((child) => {
            if (child.meta && !child.meta.hidden) {
              child.path = currentMenuRoute.path + '/' + child.path
              hasSide += 1
            }
          })
        }
        if (hasSide >= 2) {
          this.sideRoute = currentMenuRoute.children
        } else {
          this.sideRoute = []
        }
      }
      this.$nextTick(() => {
        this.defaultOpeneds = indexPath
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.app-main {
  @include wh100();
  .header {
    width: 100%;
    height: $--layout-head--height;
    float: left;
    .menu {
      width: calc(100% - 120px - 150px);
      height: 100%;
      float: left;
    }
    .config {
      width: 80px;
      height: 100%;
      float: left;
    }
  }
  .body {
    width: 100%;
    height: calc(100% - #{$--layout-head--height});
    float: left;
    .side-menu {
      width: 256px;
      height: 100%;
      box-sizing: border-box;
      float: left;
    }
    .render-view {
      width: calc(100% - 256px);
      height: 100%;
      float: left;
      background-color: rgba(155, 33, 111, 0.1);
      padding: 20px;
      &.has-side-menu {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
