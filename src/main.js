import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

Vue.config.productionTip = false

import { auth } from './firebase'
auth.onAuthStateChanged(user => {
  if (user) {
    console.log(user)
    const detectoUsuario = {
      email: user.email,
      uid: user.uid
    }
    store.dispatch('detectarUsuario', detectoUsuario)
  } else {
    console.log(user)
    store.dispatch('detectarUsuario', user)
  }
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})
