import Vue from 'vue'
import VueRouter from 'vue-router'
import Hero from '../components/hero/Hero.vue'
import AboutAlternate from '../components/about/AboutAlternate.vue'
import Projects from '../components/projects/Projects.vue'
import BlogPreview from '../components/blog/BlogPreview.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'Junho\'s Website'
    },
    component: Hero
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title: 'About Me | Junho\'s Website'
    },
    component: AboutAlternate
  },
  {
    path: '/projects',
    name: 'Projects',
    meta: {
      title: 'My Projects | Junho\'s Website'
    },
    component: Projects
  },
  {
    path: '/blogs',
    name: 'BlogPreview',
    meta: {
      title: 'My Blog Preview | Junho\'s Website'
    },
    component: BlogPreview
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
