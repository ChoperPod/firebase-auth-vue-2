<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="loginUsuario({ email: $v.emailLog.$model, password: $v.passLog.$model })">
            <input type="email" placeholder="ingrese email" v-model="$v.emailLog.$model" class="form-control mt-2">
            <small class="text-danger" v-if="!$v.emailLog.required">Correo requerido</small>
            <small class="text-danger" v-if="!$v.emailLog.email">Correo no valido</small>
            <input type="password" placeholder="ingrese contraseña" v-model="$v.passLog.$model" class="form-control mt-2">
            <small class="text-danger d-block" v-if="!$v.passLog.required">Contraseña requerida</small>
            <small class="text-danger d-block" v-if="!$v.passLog.minLength">Contraseña demasiado corta</small>
            <button type="submit" class="btn btn-success mt-2" :disabled="$v.$invalid">Login</button>
            <p v-if="error === 'auth/user-not-found'">Usuario incorrecto</p>
            <p v-if="error === 'auth/wrong-password'">Contraseña incorrecta</p>
        </form>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { required, minLength, email } from 'vuelidate/lib/validators'
export default {
    name: 'Login',
    data() {
        return {
            emailLog: '',
            passLog: ''
        }
    },
    methods: {
        ...mapActions(['loginUsuario'])
    },
    computed: {
        ...mapState(['error'])
    },
    validations: {
        emailLog: { required, email },
        passLog: { required, minLength: minLength(6) }
    }
}
</script>