import {createRouter, createWebHistory} from 'vue-router'
import Home from '../component/Home.vue'
import Kegiatan from '../component/Kegiatan.vue'

const routes = [
    {
        path: '/',
        component: Home 
    },
    {
        path: '/kegiatan',
        component: Kegiatan
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router