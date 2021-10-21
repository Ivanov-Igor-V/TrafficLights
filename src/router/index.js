import { createRouter, createWebHistory } from 'vue-router'
import Red from '../views/Red.vue'
import Green from '../views/Green.vue'
import Yellow from '../views/Yellow.vue'

const routes = [
  {
    path: '/',
    redirect: '/red'
  },
  {
    path: '/red',
    name: 'Red',
    component: Red
  },
  {
    path: '/green',
    name: 'Green',
    component: Green
  },
  {
    path: '/yellow',
    name: 'yellow',
    component: Yellow
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
