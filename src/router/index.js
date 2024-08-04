import { createRouter, createWebHistory } from 'vue-router'

import MainLayout from '@/components/layouts/MainLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/HomeView.vue')
        },
        {
          path: 'profile',
          name: 'profile',
          component: () => import('../views/ProfileView.vue')
        }
      ]
    },
    {
      path: '/development',
      component: MainLayout,
      children: [
        {
          path: 'content-cards',
          name: 'contentCard',
          component: () => import('../views/development/ContentCardView.vue')
        }
      ]
    }
  ]
})

export default router
