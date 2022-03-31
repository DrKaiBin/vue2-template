<!--
 * @Description: 
 * @Author: 张楷滨
 * @Date: 2022-03-29 14:35:17
 * @LastEditTime: 2022-03-29 17:45:06
 * @LastEditors: 张楷滨
-->
<template>
  <div class="">
    <div class="box-drawer" @click="openConfigDrawer">
      <svg-icon icon="config" class="config-button" type="primary"></svg-icon>
    </div>
    <el-drawer title="项目配置" :visible.sync="drawer" :direction="direction">
      <!-- :before-close="handleClose" -->
      <div class="">
        <span>导航栏配置</span>
        <span>
          <el-radio-group v-model="navBarType" @change="changeNavBarType">
            <el-radio :label="1">顶部层级导航栏</el-radio>
            <el-radio :label="2">顶册双边导航栏</el-radio>
          </el-radio-group>
        </span>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      drawer: false,
      navBarType: 2,
      direction: 'rtl',
    }
  },
  computed: {
    ...mapState({
      _navBarType: (state) => state.config.navBarType,
    }),
  },
  created() {
    this.navBarType = this._navBarType
  },
  methods: {
    openConfigDrawer() {
      this.drawer = true
    },
    closeDrawer() {
      this.drawer = false
    },
    changeNavBarType() {
      this.$store.commit('config/SET_NAV_BAR_TYPE', this.navBarType)
    },
  },
}
</script>

<style lang="scss" scoped>
.box-drawer {
  width: 40px;
  height: 40px;
  background-color: white;
  position: fixed;
  right: 0;
  top: 20%;
  box-shadow: $shadow;
  padding: 10px;
  cursor: pointer;
  .config-button {
    width: 100%;
    height: 100%;
  }
}
</style>
