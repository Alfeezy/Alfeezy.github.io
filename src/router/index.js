import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../components/Landing'

Vue.use(VueRouter)

const routes = [
  {
    path: '/welcome',
    name: 'Landing',
    component: Landing,
  },
]

const router = new VueRouter({
  routes
})

export default router
