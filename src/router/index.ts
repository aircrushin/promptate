import { createRouter, createWebHistory } from 'vue-router'
import Main from '../pages/Main.vue'
import Generator from '../pages/Generator.vue'

const routes = [
  {
    path: '/', 
    name: 'Main',
    component: Main
  },
  {
    path: '/generator', 
    name: 'Generator',
    component: Generator
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes  
})

export default router