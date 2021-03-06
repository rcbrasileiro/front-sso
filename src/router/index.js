import Vue from 'vue'
import VueRouter from 'vue-router'

import Signin from '../views/Signin.vue'
import Listagem from '../views/Listagem.vue'
import Error from '../views/Error.vue'
import store from '../store'

Vue.use(VueRouter)

function isAuthenticated (to, from, next) {
  if (store.getters.isAuthenticated) {
    return next()
  }

  return next({ name: 'Signin' })
}

function isNotAuthenticated (to, from, next) {
  if (!store.getters.isAuthenticated) {
    return next()
  }

  return next({ name: 'Home' })
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Listagem,
    beforeEnter: isAuthenticated
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin,
    beforeEnter: isNotAuthenticated
  },
  {
    path: '/error',
    name: 'Error',
    component: Error
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
