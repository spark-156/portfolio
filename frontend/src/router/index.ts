import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/skills/react',
    name: 'React',
    component: () => import('../views/skills/React.vue')
  }, {
    path: '/skills/docker',
    name: 'Docker',
    component: () => import('../views/skills/Docker.vue')
  }, {
    path: '/skills/linux',
    name: 'Linux',
    component: () => import('../views/skills/Linux.vue')
  }, {
    path: '/skills/python',
    name: 'Python',
    component: () => import('../views/skills/Python.vue')
  }, {
    path: '/:pathMatch(.*)*',
    name: 'Not Found',
    component: () => import('../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
