<script setup>

import {ref} from 'vue'
let title=ref('首页')
</script>

<template>
     <el-header>左侧导航栏</el-header>
  <router-view></router-view>
</template>

<style scoped>
/* scoped 表示局域样式，作用于当前组件 */
</style>
