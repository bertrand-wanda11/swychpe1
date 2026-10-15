import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView, meta: { title: 'Digital cooperative banking for Cameroon' } },
  { path: '/accounts', name: 'accounts', component: () => import('../views/AccountsView.vue'), meta: { title: 'Accounts' } },
  { path: '/pay', name: 'pay', component: () => import('../views/PayView.vue'), meta: { title: 'Pay & transfer' } },
  { path: '/save', name: 'save', component: () => import('../views/SaveView.vue'), meta: { title: 'Save' } },
  { path: '/borrow', name: 'borrow', component: () => import('../views/BorrowView.vue'), meta: { title: 'Borrow' } },
  { path: '/business', name: 'business', component: () => import('../views/BusinessView.vue'), meta: { title: 'Business banking' } },
  { path: '/security', name: 'security', component: () => import('../views/SecurityView.vue'), meta: { title: 'Security' } },
  { path: '/help', name: 'help', component: () => import('../views/HelpView.vue'), meta: { title: 'Help centre' } },
  { path: '/about', name: 'about', component: () => import('../views/AboutView.vue'), meta: { title: 'About us' } },
  { path: '/early-access', name: 'early-access', component: () => import('../views/EarlyAccessView.vue'), meta: { title: 'Early access invite' } },
  { path: '/invite', redirect: '/early-access' },
  { path: '/early-invite', redirect: '/early-access' },
  { path: '/download', name: 'download', component: () => import('../views/DownloadView.vue'), meta: { title: 'Download the app' } },
  { path: '/privacy', name: 'privacy', component: () => import('../views/PrivacyView.vue'), meta: { title: 'Privacy policy' } },
  { path: '/terms', name: 'terms', component: () => import('../views/TermView.vue'), meta: { title: 'Terms & conditions' } },
  // Play Console "Delete account URL" and "Delete data URL".
  { path: '/delete-account', name: 'delete-account', component: () => import('../views/DeleteAccountView.vue'), meta: { title: 'Delete your account' } },
  { path: '/delete-data', name: 'delete-data', component: () => import('../views/DeleteDataView.vue'), meta: { title: 'Delete your data' } },
  { path: '/delete_account', redirect: '/delete-account' },
  { path: '/account-deletion', redirect: '/delete-account' },
  { path: '/services', redirect: '/accounts' },
  { path: '/Started', redirect: '/early-access' },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('../views/NotFoundView.vue'), meta: { title: 'Page not found' } },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, saved) {
    if (saved) return saved
    if (to.hash) return { el: to.hash, top: 96, behavior: 'smooth' }
    return { top: 0 }
  },
})

router.afterEach((to) => {
  document.title = `${to.meta.title || 'SwychPe'} | SwychPe`
})

export default router
