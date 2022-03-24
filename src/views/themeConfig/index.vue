<!--
 * @Description: 
 * @Author: 张楷滨
 * @Date: 2022-03-01 10:51:34
 * @LastEditTime: 2022-03-24 14:16:58
 * @LastEditors: 张楷滨
-->
<template>
  <div class="theme-config">
    <div class="theme-config-group">
      <div
        class="color-picker"
        v-for="color of Object.keys(colorVariables)"
        :key="color"
      >
        <el-color-picker
          v-if="colorVariables[color].indexOf('#') !== -1"
          v-model="colorVariables[color]"
          class="picker"
          @change="changeColor"
        ></el-color-picker>
        <el-input
          v-else-if="colorVariables[color].indexOf('px') !== -1"
          v-model="colorVariables[color]"
          class="picker"
          @change="changeColor"
        ></el-input>
        <div class="description">{{ $t('cssVariables.' + color) }}</div>
      </div>
    </div>

    <div class="config-button-group">
      <el-button type="primary" @click="copyOnClickboard"
        >复制到剪切板</el-button
      >
      <el-button type="success" @click.native.prevent="saveToBorwser"
        >保存到当前浏览器</el-button
      >
      <el-button type="info" @click="resetTheme">重置样式</el-button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { cloneDeep } from 'loadsh'
import style from '@/styles/variables.scss'
import MessageTip from '@/utils/MessageTip'
export default {
  data() {
    return {
      colorVariables: {},
    }
  },
  computed: {
    routeName() {
      return this.$route.meta.title
    },
  },
  props: {
    msg: {
      type: String,
      default: 'new message',
    },
  },
  created() {
    const browserTheme = localStorage.getItem('theme')
    if (browserTheme) {
      this.colorVariables = JSON.parse(browserTheme)
      this.changeColor()
    } else if (style != null) {
      this.getBaseStyle()
    }
  },
  methods: {
    /**
     * @Description: 获取基本样式
     * @Author: 张楷滨
     * @Date: 2022-03-24 11:20:47
     * @LastEditTime: Do not edit
     * @LastEditors: 张楷滨
     */
    getBaseStyle() {
      const keys = Object.keys(style)
      keys.forEach((item) => {
        this.$set(this.colorVariables, item, style[item])
      })
    },
    /**
     * @Description: 改变颜色，当color-pciker改变后，做其对应渲染
     * @Author: 张楷滨
     * @Date: 2022-03-24 11:08:14
     * @LastEditTime: Do not edit
     * @LastEditors: 张楷滨
     */
    changeColor() {
      const useDom = !!(
        typeof window !== 'undefined' &&
        window.document &&
        window.document.createElement
      )
      if (useDom) {
        const csslist = this.setStyleList()
        const styleNode = document.createElement('style')
        styleNode.setAttribute('theme', 'root-theme')
        styleNode.innerHTML = `:root {
            ${csslist.join('\n')}
          }`
        const head = document.querySelector('head')
        const currentStyle = Array.from(head.children).find(
          (node) =>
            node.tagName === 'STYLE' &&
            node.getAttribute('theme') === 'root-theme'
        )
        if (currentStyle) head.removeChild(currentStyle)

        head.appendChild(styleNode)
      }
    },
    /**
     * @Description: 返回css列表
     * @Author: 张楷滨
     * @Date: 2022-03-24 11:09:04
     * @LastEditTime: Do not edit
     * @LastEditors: 张楷滨
     */
    setStyleList() {
      const csslist = Object.keys(this.colorVariables).map((key) => {
        return `${key}:${this.colorVariables[key]};`
      })
      return csslist
    },
    /**
     * @Description: 拷贝至剪切板
     * @Author: 张楷滨
     * @Date: 2022-03-24 11:09:23
     * @LastEditTime: Do not edit
     * @LastEditors: 张楷滨
     */
    copyOnClickboard() {
      const csslist = this.setStyleList()
      this.$copyText(csslist.join('\r')).then(
        () => {
          MessageTip.success('拷贝成功')
        },
        (e) => {
          console.error('无法复制：', e)
        }
      )
    },
    saveToBorwser() {
      localStorage.setItem(
        'theme',
        JSON.stringify(cloneDeep(this.colorVariables))
      )
    },
    resetTheme() {
      localStorage.removeItem('theme')
      this.getBaseStyle()
      this.changeColor()
    },
    getValue() {
      console.log(this.searchValue)
    },
    alertTip() {
      this.$message.success('66666')
    },
  },
}
</script>

<style lang="scss">
.theme-config {
  width: 100%;
  height: 100%;
}
.theme-config-group {
  width: 100%;
  height: calc(100% - 40px);
  .color-picker {
    float: left;
    margin: $padding-base * 4;
    .picker {
      height: 40px;
      float: left;
    }
    .description {
      height: 40px;
      line-height: 40px;
      float: left;
    }
    .el-input {
      width: 100px;
    }
  }
}

.config-button-group {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: flex-end;
}
</style>
