// import { userSetter } from 'core-js/fn/symbol'
import Vue from 'vue'
import Vuex from 'vuex'
import { auth, db } from '../firebase'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario: null,
    error: null,
    tareas: [],
    tarea: {
      nombre: '',
      id: ''
    }
  },
  getters: {
  },
  mutations: {
    setUsuario(state, payload) {
      state.usuario = payload
    },
    setError(state, payload) {
      state.error = payload
    },
    //mutaciones para las tareas
    setTareas(state, payload) {
      state.tareas = payload
    },
    setTarea(state, payload) {
      state.tarea = payload
    }
  },
  actions: {
    //acciones para las tareas de los usuarios
    getTareas({ commit, state }) {
      const tareas = []
      // console.log(state.usuario.email)
      db.collection(state.usuario.email).get()
        .then(res => {
          res.forEach(doc => {
            console.log(doc.id)
            console.log(doc.data())
            let tarea = doc.data()
            tarea.id = doc.id
            tareas.push(tarea)
          })
          commit('setTareas', tareas)
        })
    },
    getTarea({ commit, state }, idTarea) {
      db.collection(state.usuario.email).doc(idTarea).get()
        .then(doc => {
          console.log(doc.id)
          console.log(doc.data())
          let tarea = doc.data()
          tarea.id = doc.id
          commit('setTarea', tarea)
        })
    },
    editarTarea({ commit, state }, tarea) {
      db.collection(state.usuario.email).doc(tarea.id).update({
        nombre: tarea.nombre
      })
        .then(() => {
          console.log('Tarea editada')
          router.push('/')
        })
    },
    agregarTarea({ commit, state }, nombreTarea) {
      db.collection(state.usuario.email).add({
        nombre: nombreTarea
      })
        .then(doc => {
          console.log('Tarea agregada con id: ' + doc.id)
          router.push('/')
        })
    },
    eliminarTarea({ commit, dispatch, state }, idTarea) {
      db.collection(state.usuario.email).doc(idTarea).delete()
        .then(() => {
          console.log('tarea eliminada')
          dispatch('getTareas')
          // commit('setEliminarTarea')
        })
    },
    //acciones para usuarios
    crearUsuario({ commit }, usuario) {
      auth.createUserWithEmailAndPassword(usuario.email, usuario.password)
        .then(resp => {
          console.log(resp)
          const usuarioCreado = {
            email: resp.user.email,
            uid: resp.user.uid
          }
          db.collection(resp.user.email).add({
            nombre: 'Tarea de ejemplo'
          }).then(doc => {
            commit('setUsuario', usuarioCreado)
            router.push('/')
          }).catch(error => console.log(error))
        }).catch(error => {
          console.log(error)
          commit('setError', error)
        })
    },
    loginUsuario({ commit }, usuario) {
      auth.signInWithEmailAndPassword(usuario.email, usuario.password)
        .then(resp => {
          console.log(resp)
          const usuarioLogueado = {
            email: resp.user.email,
            uid: resp.user.uid
          }
          commit('setUsuario', usuarioLogueado)
          router.push('/')
        }).catch(error => {
          console.log(error)
          commit('setError', error)
        })
    },
    cerrarSesion({ commit }) {
      auth.signOut()
        .then(resp => {
          console.log(resp)
          router.push('/Login')
        }).catch(error => {
          console.log(error)
        })
    },
    detectarUsuario({ commit }, usuario) {
      commit('setUsuario', usuario)
    }
  },
  getters: {
    existeUsuario(state) {
      if (state.usuario === null) {
        return false
      } else {
        return true
      }
    }
  },
  modules: {
  }
})
