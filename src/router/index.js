import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Info from '../pages/Info.vue'

const routes = [
    {
        path:"/",
        component:Home
    },
    {
        path:"/home",
        component:Home
    },
    {
        path:"/info",
        component:Info
    }
]

const router = createRouter({
    routes,
    history:createWebHistory()
})

export default router