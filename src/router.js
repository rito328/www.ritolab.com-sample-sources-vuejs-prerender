import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Product from './views/Product.vue'
import Recruit from './views/Recruit.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { title: 'verification apps', desc: 'This is Home page.' }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: { title: 'About', desc: 'This is About page.' }
    },
    {
      path: '/product',
      name: 'product',
      component: Product,
      meta: { title: 'Product', desc: 'This is Product page.' }
    },
    {
      path: '/recruit',
      name: 'recruit',
      component: Recruit,
      meta: { title: 'Recruit', desc: 'This is Recruit page.' }
    }
  ]
})
