<template>
    <div>

        <h1>Registro de usuarios</h1>
        <div>
            <form @submit.prevent="crearUsuario({ email: email, password: pass1 })">
                <input type="email" placeholder="Ingrese su correo" v-model="email" class="form-control mt-2">
                <input type="password" placeholder="Ingrese su contraseña" v-model="pass1" class="form-control mt-2">
                <input type="password" placeholder="Repita su contraseña" v-model="pass2" class="form-control mt-2">
                <button type="submit" :disabled="!desactivarBtnReg" class="btn btn-success mt-2">Registrar usuario</button>
            </form>
        </div>
        <p class="">{{ error }}</p>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
    name: 'Registro',
    data() {
        return {
            email: '',
            pass1: '',
            pass2: ''
        }
    },
    created() {

    },
    methods: {
        ...mapActions(['crearUsuario'])
    },
    computed: {
        ...mapState(['error']),
        desactivarBtnReg() {
            return this.pass1 === this.pass2 && this.pass1.trim() !== '' && this.pass1.length > 5 && this.email.trim() !== ''
        }
    }
}
</script>