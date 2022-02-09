import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'
import Todos from '../views/todos/Todos.vue'
import TodoDetails from '../views/todos/TodoDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/todos',
    name: 'Todos',
    component: Todos
  },
  {
    path: '/todos/:id',
    name: 'TodoDetails',
    component: TodoDetails,
    props: true
  },
  // redirect
  // if somebody put in browser /all-jobs, in result will get /jobs
  {
    path: '/all-todos',
    redirect: '/todos'
  },
  // catchall 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
