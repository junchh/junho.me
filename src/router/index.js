import Vue from 'vue'
import VueRouter from 'vue-router'
import Hero from '../components/hero/Hero.vue'
import About from '../components/about/About.vue'
import Projects from '../components/projects/Projects.vue'
import BlogPreview from '../components/blog/BlogPreview.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'Homepage'
    },
    component: Hero
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title: 'About Us'
    },
    component: About
  },
  {
    path: '/projects',
    name: 'Projects',
    meta: {
      title: 'My Projects'
    },
    component: Projects
  },
  {
    path: '/blogs',
    name: 'BlogPreview',
    meta: {
      title: 'My Blog Posts'
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
