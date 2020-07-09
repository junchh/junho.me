import Vue from 'vue'
import VueRouter from 'vue-router'
import Hero from '../components/hero/Hero.vue'
import About from '../components/about/About.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Hero
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
