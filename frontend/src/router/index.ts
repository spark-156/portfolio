import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/projects/:id',
  //   name: 'Project',
  //   component: () => import('../views/Project.vue')
  // },
  // {
  //   path: '/skills/:id',
  //   name: 'Skill',
  //   component: () => import('../views/Skill.vue')
  // },
  {
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
