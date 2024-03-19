import { createRouter,createWebHashHistory } from "vue-router";
// 创建路由配置，一个数组对象
const routes=[
    {
        path:'/', //路径
        name:'Home',//名字
        component:()=>import('@/views/index.vue') //异步组件
    }
] 
const router=createRouter({
    
    history:createWebHashHistory(),
    //routes:routes名字一样，可以简写routes
    routes
})
// 导出组件
export default router