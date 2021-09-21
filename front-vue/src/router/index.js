import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Products from '../views/Products.vue'
import CreateProduct from '../views/CreateProduct'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/products',
    name: 'products',
    component: Products
  },
  {
    path: '/addproduct',
    name: 'createProduct',
    component: CreateProduct
  }
]

const router = new VueRouter({
  routes
})

export default router
