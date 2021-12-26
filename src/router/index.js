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
    name: 'red',
    
    component: Red,
    props: true
  },
  {
    path: '/green',
    name: 'green',
    component: Green,
    props: true
  },
  {
    path: '/yellow',
    name: 'yellow',
    component: Yellow,
    props: true
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
