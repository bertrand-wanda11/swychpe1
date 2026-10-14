import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/pay',
      name: 'pay',
      component: () => import('../views/PayView.vue')
    },
    {
      path: '/security',
      name: 'security',
      component: () => import('../views/SecurityView.vue')
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/ServicesView.vue')
    },
    {
      path: '/save',
      name: 'save',
      component: () => import('../views/SaveView.vue')
    },
    {
      path: '/help',
      name: 'help',
      component: () => import('../views/HelpView.vue')
    },
    {
      path: '/borrow',
      name: 'borrow',
      component: () => import('../views/BorrowView.vue')
    },
    {
      path: '/business',
      name: 'business',
      component: () => import('../views/BusinessView.vue')
    },
   {
  path: '/download',
  name: 'download',
  component: () => import('../views/DownloadView.vue') 
  },
    {
  path: '/privacy',
  name: 'privacy',
  component: () => import('../views/PrivacyView.vue') 
  },
     {
  path: '/terms',
  name: 'terms',
  component: () => import('../views/TermView.vue') 
  },
   {
  path: '/legal',
  name: 'legal',
  component: () => import('../views/LegalView.vue') 
  }
  ]


const router = createRouter({
  history: createWebHistory(),

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

export default router