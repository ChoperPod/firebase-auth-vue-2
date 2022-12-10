<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="loginUsuario({email:emailLog, password:passLog})">
            <input type="email" placeholder="ingrese email" v-model="emailLog" class="form-control mt-2">
            <input type="password" placeholder="ingrese contraseña" v-model="passLog" class="form-control mt-2">
        <button type="submit" class="btn btn-success mt-2">Login</button>
        <p>{{error}}</p>
        </form>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
    name:'Login',
data(){
    return {
        emailLog:'',
        passLog:''
    }
},
methods:{
    ...mapActions(['loginUsuario'])
},
computed:{
    ...mapState(['error'])
}
}
</script>