import { createRouter, createWebHistory } from 'vue-router'
import home from '../pages/home.vue'

const routes = [
    {
        path:"/",
        component:home
    }
]

const router = createRouter({
    routes,
    history:createWebHistory()
})

export default router