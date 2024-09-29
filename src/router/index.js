import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/Signup.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/Search.vue')
    },
    {
      path: '/map',
      name: 'map',
      component: () => import('../views/Map.vue')
    },
    {
      path: '/content',
      name: 'content',
      component: () => import('../views/Content.vue')
    }
  ]
})

export default router
