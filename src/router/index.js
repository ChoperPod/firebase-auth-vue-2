import Vue from 'vue'
import VueRouter from 'vue-router'
import { auth } from '../firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: () => import(/* webpackChunkName: "Registro" */ '../views/InicioView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/Registro',
    name: 'Registro',
    component: () => import(/* webpackChunkName: "Registro" */ '../views/RegistroView.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Registro" */ '../views/LoginView.vue')
  },
  {
    path: '/Editar/:id',
    name: 'Editar',
    component: () => import(/* webpackChunkName: "Registro" */ '../views/EditarView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/Agregar',
    name: 'Agregar',
    component: () => import(/* webpackChunkName: "Registro" */ '../views/AgregarView.vue'),
    meta: { requiresAuth: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const usuario = auth.currentUser
    console.log('usuario desde router ', usuario)
    if (!usuario) {
      next({ path: '/Login' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
