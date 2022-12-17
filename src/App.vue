<template>
  <div id="app" class="container mt-2">
    <nav>
      <router-link to="/" v-if="existeUsuario" class="btn btn-outline-success me-2">Inicio</router-link>
      <router-link to="/Registro" v-if="!existeUsuario" class="btn btn-outline-success me-2">Registro</router-link>
      <router-link to="/Login" v-if="!existeUsuario" class="btn btn-outline-success me-2">Login</router-link>
      <button @click="cerrarSesion" v-if="existeUsuario" class="btn btn-outline-danger me-2">Cerrar sesion</button>
      <router-link to="/cards" class="btn btn-outline-warning me-2">Cards</router-link>
      <router-link to="/grid" class="btn btn-outline-warning me-2">Grid</router-link>
      <router-link to="/form" class="btn btn-outline-warning me-2">Form</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  methods:{
    ...mapActions(['cerrarSesion'])
  },
  computed:{
    ...mapGetters(['existeUsuario'])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
