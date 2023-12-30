import { createRouter, createWebHistory } from 'vue-router'
import Main from '../pages/Main.vue'
import Generator from '../pages/Generator.vue'
import Welcome from '../pages/Welcome.vue'
import NotFound from '../pages/NotFound.vue'
import About from '../pages/About.vue'

const routes = [
  {
    path: '/', 
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/generator', 
    name: 'Generator',
    component: Generator
  },
  {
    path: '/main', 
    name: 'Main',
    component: Main
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes  
})

export default router