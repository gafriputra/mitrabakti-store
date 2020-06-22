import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import product from '../views/Product.vue'
import shoppingCart from '../views/shoppingCart.vue'
import Success from '../views/Success.vue'


Vue.use(VueRouter)

const routes = [
  {
        path: '/',
        name: 'Home',
        component: Home
  },
  {
        path: '/product/:id',
        name: 'product',
        props: true,
        component: product
  },
  {
        path: '/Cart',
        name: 'Cart',
        component: shoppingCart
  },
  {
        path: '/Success',
        name: 'Success',
        component: Success
  }
]

const router = new VueRouter({
  routes
})

export default router
