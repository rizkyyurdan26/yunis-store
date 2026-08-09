import AdminLayout from '@/layouts/AdminLayout.vue'
import PublicLayout from '@/layouts/PublicLayout.vue'
import DashboardAdmin from '@/views/admin/DashboardAdmin.vue'
import LoginAdmin from '@/views/admin/LoginAdmin.vue'
import CreateUpdateProduct from '@/views/admin/product/CreateUpdateProduct.vue'
import ProductAdmin from '@/views/admin/product/ProductAdmin.vue'
import ProductDetail from '@/views/admin/product/ProductDetail.vue'
import HomePage from '@/views/public/HomePage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginAdmin,
  },

  // Public Pages
  {
    path: '/',
    component: PublicLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: HomePage,
      },
    ],
  },

  // Admin Pages
  {
    path: '/admin',
    component: AdminLayout,
    children: [
      {
        path: '',
        name: 'dashboard',
        component: DashboardAdmin,
      },

      // Customer
      {
        path: 'product',
        name: 'product',
        component: ProductAdmin,
      },
      {
        path: 'product/create',
        name: 'create-product',
        component: CreateUpdateProduct,
      },
      {
        path: 'product/:product_id',
        name: 'product-detail',
        component: ProductDetail,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
