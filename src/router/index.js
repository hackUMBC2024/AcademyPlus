import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '../views/Login.vue'

const router = createRouter({
  history: createWebHashHistory(),
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
    },
    {
      path: '/career',
      name: 'career',
      component: () => import('../views/Salary.vue')
    }
  ]
})

export default router
