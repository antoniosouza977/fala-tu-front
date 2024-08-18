import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/auth/LoginView.vue";
import RegisterView from '@/views/auth/RegisterView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/register',
            name: 'register',
            component: RegisterView,
            meta: {
                requiresAuth: false
            }
        }
    ]
})

export default router
