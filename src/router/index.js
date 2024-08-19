import { createRouter, createWebHistory } from 'vue-router'

import MainLayout from '@/components/layouts/MainLayout.vue'
import AuthLayout from '@/components/layouts/AuthLayout.vue'
import { onlyAuthenticated, onlyUnauthenticated } from '@/core/guards/access'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth',
      component: AuthLayout,
      beforeEnter: [onlyUnauthenticated],
      children: [
        {
          path: 'login',
          name: 'auth.login',
          component: () => import('../views/auth/LoginView.vue'),
        }
      ]
    },
    {
      path: '/',
      component: MainLayout,
      beforeEnter: [onlyAuthenticated],
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
        },
        {
          path: 'buttons',
          name: 'buttons',
          component: () => import('../views/development/ButtonsView.vue')
        },
        {
          path: 'alerts',
          name: 'alerts',
          component: () => import('../views/development/AlertsView.vue')
        },
        {
          path: 'form-fields',
          name: 'formFields',
          component: () => import('../views/development/FormFieldsView.vue')
        },
        {
          path: 'forms',
          name: 'forms',
          component: () => import('../views/development/FormView.vue')
        }
      ]
    }
  ]
})

export default router
