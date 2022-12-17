<template>
    <div>

        <h1>Registro de usuarios</h1>
        <div>
            <form @submit.prevent="crearUsuario({ email: email, password: pass1 })">
                <input type="email" placeholder="Ingrese su correo" v-model="$v.email.$model" class="form-control mt-2">
                <small class="text-danger d-block" v-if="!$v.email.required">Correo requerido</small>
                <small class="text-danger d-block" v-if="!$v.email.email">Correo invalido</small>
                <input type="password" placeholder="Ingrese su contraseña" v-model="pass1" class="form-control mt-2">
                <small class="text-danger d-block" v-if="!$v.pass1.required">Contraseña requerida</small>
                <small class="text-danger d-block" v-if="!$v.pass1.minLength">Contraseña demasiado corta</small>
                <input type="password" placeholder="Repita su contraseña" v-model="pass2" class="form-control mt-2">
                <small class="text-danger d-block" v-if="!$v.pass2.required">Contraseña requerida</small>
                <small class="text-danger d-block" v-if="!$v.pass2.minLength">Contraseña demasiado corta</small>
                <small class="text-danger d-block" v-if="!$v.pass2.sameAs">Contraseñas no coinciden</small>
                <button type="submit" :disabled="!desactivarBtnReg || $v.$invalid" class="btn btn-success mt-2">Registrar usuario</button>
            </form>
        </div>
        <p v-if="error === 'auth/email-already-in-use'">Correo ya registrado</p>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { required, minLength, email, sameAs} from 'vuelidate/lib/validators'
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
    },
    validations:{
        email:{email,required},
        pass1:{required, minLength:minLength(6)},
        pass2:{required, minLength:minLength(6),  sameAs:sameAs('pass1')}
    }
}
</script>