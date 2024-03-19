<script setup>
// setup语法糖为vue3
// ref可以创建一个响应式的数据

import {ref} from 'vue'
// 组件的引入
import NavMenu from './navMenu.vue'
let title=ref('首页')
</script>

<template>
  <!-- vue2只能有一个根节点，vue3可以由多个 -->
  <div>{{ title }}</div>
  <template>
  <div class="common-layout">
    <el-container>
    <NavMenu/>
      <el-container>
        <el-aside width="200px">头部</el-aside>
        <el-main>展示区域</el-main>
      </el-container>
    </el-container>
  </div>
</template>

</template>

<style scoped>
/* scoped 表示局域样式，作用于当前组件 */
</style>
