import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/projects',
    name: 'projects',
    component: () =>
      import(/* webpackChunkName: "projects" */ '@/views/Projects.vue')
  },
  {
    path: '/team',
    name: 'team',
    component: () => import(/* webpackChunkName: "team" */ '@/views/Team.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
