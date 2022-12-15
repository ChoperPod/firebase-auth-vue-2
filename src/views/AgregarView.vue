<template>
    <div>
        <h1>Agregar</h1>
        <form @submit.prevent="agregarTarea($v.nombre.$model)" class="form-inline">
            <div class="input-group">
                <div class="input-group-text">Nombre de la tarea:</div>
                <input type="text" v-model="$v.nombre.$model" class="form-control">

                <button type="submit" class="btn btn-warning" :disabled="$v.$invalid || carga">Agregar tarea</button>
            </div>
        </form>
        <small class="text-danger d-block" v-if="!$v.nombre.required">Campo requerido</small>
        <small class="text-danger d-block" v-if="!$v.nombre.minLength">Minimo 5 caracteres</small>
        <!-- {{ $v.nombre }} -->
        <!-- {{ $v }} -->
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { required, minLength } from 'vuelidate/lib/validators'
export default {
    name: 'Agregar',
    data() {
        return {
            nombre: ''
        }
    },
    methods: {
        ...mapActions(['agregarTarea'])
    },
    validations: {
        nombre: { required, minLength: minLength(5) }
    },
    computed:{
        ...mapState(['carga'])
    }
}
</script>