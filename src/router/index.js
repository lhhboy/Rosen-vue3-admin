import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login')
  },
  {
    path: '/echarts',
    name: 'Echarts',
    component: () => import('../views/echarts')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
