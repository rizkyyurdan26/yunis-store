import HomePage from '@/views/HomePage.vue'
import SkincarePage from '@/views/SkincarePage.vue'
import ProductDetailPage from '@/views/ProductDetailPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home-page',
    component: HomePage,
  },
  {
    path: '/skincare',
    name: 'skincare-page',
    component: SkincarePage,
  },
  {
    path: '/products/:productId',
    name: 'product-detail',
    component: ProductDetailPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

export default router
