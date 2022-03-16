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
    <div
      :class="[
        'body',
        sidebarCollapse ? 'collapsed' : 'collapse',
        { 'has-side-menu': !(navBarType === 2 && sideRoutes.length >= 1) },
      ]"
    >
      <side-menu
        v-if="navBarType === 2 && sideRoutes.length >= 1"
        :sideRoutes="sideRoutes"
        :defaultOpeneds="defaultOpeneds"
        :collapse="sidebarCollapse"
      />
      <div class="render-view">
        <router-view></router-view>
      </div>
    </div>
    <config-drawer ref="configDrawer"></config-drawer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LogoInfo from './components/config/LogoInfo.vue'
import TopMenu from './components/menu/TopMenu.vue'
import SideMenu from './components/menu/SideMenu.vue'
import BaseInfo from './components/config/BaseInfo.vue'
import ConfigDrawer from './components/config/ConfigDrawer.vue'
import { cloneDeep } from 'loadsh'
export default {
  name: 'Layout',
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
      const _routes = this.userRoutes.filter((item) => {
        if (!item.meta?.hidden) {
          item.redirect = this.setMainRouteRedirect(item)
        }
        return !item.meta?.hidden
      })
      return _routes
    },
    sidebarCollapse() {
      return this.$store.state.config.sidebarCollapse
    },
    ...mapGetters(['navBarType', 'userRoutes']),
  },
  created() {
    this.changeTopMenuItem(this.$route.path, false)
  },
  methods: {
    /**
     * @Description: 设置主路由重定向
     * @Author: 张楷滨
     * @Date: 2022-03-13 17:06:57
     * @LastEditTime: Do not edit
     * @LastEditors: 张楷滨
     * @param {*} route
     */
    setMainRouteRedirect(route, basePath = '') {
      let path = route.path === '/' ? '' : route.path
      if (basePath !== '') path = basePath
      if (route.children != null) {
        const fristChild = route.children.find((child) => {
          return !child.meta?.hidden
        })
        if (fristChild != null) path += '/' + fristChild.path
        if (fristChild.children)
          path = this.setMainRouteRedirect(fristChild, path)
      }
      return path
    },
    /**
     * @Description: 打开项目配置
     * @Author: 张楷滨
     * @Date: 2022-03-13 17:07:22
     * @LastEditTime: Do not edit
     * @LastEditors: 张楷滨
     */
    openConfigDrawer() {
      this.$refs['configDrawer'].openConfigDrawer()
    },
    /**
     * @Description: 顶部导航栏点击监听，当为顶侧导航栏时，判断是否打开侧边栏
     * @Author: 张楷滨
     * @Date: 2022-03-13 17:07:37
     * @LastEditTime: Do not edit
     * @LastEditors: 张楷滨
     * @param {*} indexPath
     */
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
            if (child.icon != null) child.meta.icon = child.icon
            if (child.meta && !child.meta.hidden) {
              child.path = currentMenuRoute.path + '/' + child.path
              hasSide += 1
              if (child.children != null && Array.isArray(child.children))
                hasSide += 2
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
