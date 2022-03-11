<template>
  <div class="app-main">
    <div class="header">
      <logo-info></logo-info>
      <div class="menu" :key="navBarType">
        <top-menu
          :menuRoutes="menuRoutes"
          :defaultOpeneds="defaultOpeneds"
          :navBarType="navBarType"
          @select="changeTopMenuItem"
        />
      </div>
      <base-info></base-info>
      <!-- <div class="config">
        <el-button type="primary" @click="openConfigDrawer">配置</el-button>
      </div> -->
    </div>
    <div class="body">
      <div class="side-menu" v-if="navBarType === 2 && sideRoutes.length >= 1">
        <side-menu
          class="side-menu"
          :sideRoutes="sideRoutes"
          :defaultOpeneds="defaultOpeneds"
        />
      </div>
      <div
        :class="[
          'render-view',
          { 'has-side-menu': !(navBarType === 2 && sideRoutes.length >= 1) },
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
import LogoInfo from './components/config/LogoInfo.vue'
import TopMenu from './components/menu/TopMenu.vue'
import SideMenu from './components/menu/SideMenu.vue'
import BaseInfo from './components/config/BaseInfo.vue'
import ConfigDrawer from './components/config/ConfigDrawer.vue'
import { cloneDeep } from 'loadsh'
export default {
  components: {
    LogoInfo,
    TopMenu,
    SideMenu,
    BaseInfo,
    ConfigDrawer,
  },
  data() {
    return {
      sideRoutes: [], // 侧边栏路由，为空时，不展示
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
      console.log(32132132123123, _routes)
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
          this.sideRoutes = currentMenuRoute.children
        } else {
          this.sideRoutes = []
        }
      }
      this.$nextTick(() => {
        this.defaultOpeneds = indexPath
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
