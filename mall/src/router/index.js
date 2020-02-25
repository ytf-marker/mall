import Vue from 'vue'
import VueRouter from 'vue-router'


const home =() => import('../views/home/home')
const car =() => import('../views/car/car')
const category =() => import('../views/category/category')
const main =() => import('../views/main/main')
//1.安装插件
Vue.use(VueRouter)

//2.创建路由对象
const routes =[
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component:home
    },
    {
        path:'/car',
        component:car
    },
    {
        path:'/category',
        component:category
    },
    {
        path:'/main',
        component:main
    }
]
const router = new VueRouter({
    routes
})
//3.到处路由

export default router