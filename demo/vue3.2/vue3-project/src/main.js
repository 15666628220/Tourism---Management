import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js' //  ./同级 ../上一级 @/ 根目录 src
// 引入css样式
import '@/assets/css/common.css'
import '@/assets/css/index.css'
import '@/assets/font/iconfont.css'
createApp(App).use(router).mount('#app')
