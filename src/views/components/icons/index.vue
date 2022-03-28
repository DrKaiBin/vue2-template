<!--
 * @Description: 图标库
 * @Author: 张楷滨
 * @Date: 2022-03-28 18:02:33
 * @LastEditTime: 2022-03-28 19:03:03
 * @LastEditors: 张楷滨
-->
<template>
  <div class="icons-container">
    <div class="">
      图标类型：
      <el-button type="primary" @click="changeType('primary')"
        >primary</el-button
      >
      <el-button type="success" @click="changeType('success')"
        >success</el-button
      >
      <el-button type="info" @click="changeType('info')">info</el-button>
      <el-button type="warning" @click="changeType('warning')"
        >warning</el-button
      >
      <el-button type="danger" @click="changeType('danger')">danger</el-button>
      复制类型：
      <el-button type="primary" @click="changeClipType('icon')"
        >复制为icon</el-button
      >
      <el-button type="primary" @click="changeClipType('button')"
        >复制为button</el-button
      >
    </div>
    <div
      v-for="item of svgIcons"
      :key="item"
      @click="handleClipboard(generateIconCode(item), $event)"
    >
      <el-tooltip placement="top">
        <div slot="content">双击复制：{{ generateIconCode(item) }}</div>
        <div class="icon-item">
          <svg-icon :icon="item" class-name="disabled" :type="iconType" />
          <span>{{ $t('icons.' + item) }}</span>
        </div>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
// import clipboard from '@/utils/clipboard'
import svgIcons from './svg-icons'
import MessageTip from '@/utils/MessageTip'

export default {
  name: 'Icons',
  data() {
    return {
      iconType: 'primary',
      clipType: 'icon',
      svgIcons,
    }
  },
  mounted() {},
  methods: {
    changeClipType(type) {
      this.clipType = type
    },
    changeType(type) {
      this.iconType = type
    },
    generateIconCode(symbol) {
      if (this.clipType === 'icon') return `<svg-icon icon="${symbol}" />`
      else if (this.clipType === 'button')
        return `<icon-button icon="${symbol}">`
    },
    handleClipboard(text) {
      this.$copyText(text).then(
        () => {
          MessageTip.success('拷贝成功')
        },
        (e) => {
          console.error('无法复制：', e)
        }
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.icons-container {
  margin: 10px 20px 0;
  overflow: hidden;

  .grid {
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }

  .icon-item {
    margin: 20px;
    height: 85px;
    text-align: center;
    width: 100px;
    float: left;
    font-size: 30px;
    color: #24292e;
    cursor: pointer;
  }

  span {
    display: block;
    font-size: 16px;
    margin-top: 10px;
  }

  .disabled {
    pointer-events: none;
  }
}
</style>
