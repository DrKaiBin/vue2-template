<!--
 * @Description: 
 * @Author: 张楷滨
 * @Date: 2022-03-25 17:34:04
 * @LastEditTime: 2022-03-25 18:54:03
 * @LastEditors: 张楷滨
-->
<template>
  <div class="base">
    <el-card v-for="item of emptyTypes" :key="item" type="primary" class="wh50">
      <div slot="header">
        <span>类型：{{ item }}</span>
      </div>
      <div v-el-empty:[item]="listObj[item]" style="width: 100%; height: 100%">
        <div class="">有数据了</div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Empty',
  data() {
    return {
      len: 0,
      len2: 0,
      list: [],
      emptyTypes: [],
      emptyRecord: 'emptyRecord',
      listObj: {},
    }
  },
  created() {
    this.getAllEmptyTypes()
  },
  mounted() {
    setInterval(this.simulateEmpty, 15000)
  },
  methods: {
    getAllEmptyTypes() {
      const req = require.context('@/assets/backgrounds/empty', false, /\.svg$/)
      const list = req.keys()
      console.log(this.$data)
      list.forEach((element) => {
        const iArr = element.split('/')
        const fileFullName = iArr[1]
        const fileName = fileFullName.split('.svg')[0]
        this.emptyTypes.push(fileName)
        this.$set(this.listObj, fileName, 0)
      })
    },
    simulateEmpty() {
      console.log(6666, this.$data)
      setTimeout(() => {
        this.len = 10
        this.emptyTypes.forEach((item) => {
          this.$set(this.listObj, item, 10)
        })
      }, 3000)
      setTimeout(() => {
        this.emptyTypes.forEach((item) => {
          this.$set(this.listObj, item, 0)
        })
        this.len = 0
      }, 6000)
    },
  },
}
</script>

<style lang="scss" scope>
.base {
  width: 100%;
  height: 100%;
  overflow: auto;
}
.wh50 {
  width: 300px;
  height: 400px;
}
.el-card {
  float: left;
  margin: 8px;
  .el-card__body {
    width: 100%;
    height: calc(100% - 58px);
  }
}
</style>
