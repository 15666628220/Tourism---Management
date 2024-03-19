<script setup>
// setup语法糖为vue3
// ref可以创建一个响应式的数据
import {ref} from 'vue'
let title=ref('首页')
</script>

<template>
  <!-- vue2只能有一个根节点，vue3可以由多个 -->
  <!-- <div>{{ title }}</div> -->

  <!-- 子组件书写的位置 -->
  <router-view></router-view>
</template>

<style scoped>
/* scoped 表示局域样式，作用于当前组件 */
</style>
