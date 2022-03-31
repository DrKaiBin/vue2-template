<!--
 * @Description: 
 * @Author: 张楷滨
 * @Date: 2022-03-29 16:10:26
 * @LastEditTime: 2022-03-30 14:20:36
 * @LastEditors: 张楷滨
-->
<template>
  <business-layout :show-more="showMore" :show-batch-handle="batchHandle">
    <template #left-condition>
      <div class="item">
        <el-input v-model="searchParams.keyWord"></el-input>
      </div>
      <div class="item">
        <div class="item-label">内网地址</div>
        <div class="item-value">
          <el-input v-model="searchParams.keyWord"></el-input>
        </div>
      </div>
    </template>
    <template #right-button>
      <el-button type="primary" plain @click="showMore = !showMore"
        >高级筛选</el-button
      >
      <el-button type="success" plain>添加</el-button>
      <el-button type="success" plain>更新日志</el-button>
      <el-button type="primary" plain @click="batchHandle = !batchHandle"
        >批量操作</el-button
      >
    </template>
    <template #more-condition>
      <div class="item">
        <div class="item-label">时间</div>
        <div class="item-value">
          <el-input v-model="searchParams.keyWord"></el-input>
        </div>
      </div>
      <div class="item">
        <div class="item-label">时间</div>
        <div class="item-value">
          <el-input v-model="searchParams.keyWord"></el-input>
        </div>
      </div>
    </template>
    <template #batch-handle> 66666 </template>
    <template #table>
      <el-table :data="data" height="100%" border>
        <el-table-column label="地系"></el-table-column>
        <el-table-column label="地系"></el-table-column>
        <el-table-column label="地系"></el-table-column>
        <el-table-column label="地系"></el-table-column>
      </el-table>
    </template>
    <template #footer> asdfasdf </template>
  </business-layout>
</template>

<script>
import BusinessLayout from '@/components/BusinessLayout'
export default {
  components: {
    BusinessLayout,
  },
  data() {
    return {
      searchParams: {
        keyWord: '',
      },
      showMore: false,
      batchHandle: false,
      data: [],
    }
  },
}
</script>

<style lang="scss" scoped>
.tm-base {
  .manager-layout {
    &__footer {
      border: 1px solid #000;
    }
  }
}
</style>
