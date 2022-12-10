<template>
    <div>
        <h1>Agregar</h1>
        <form @submit.prevent="agregarTarea(nombre)" class="form-inline">
            <div class="input-group">
            <div class="input-group-text">Nombre de la tarea:</div>
            <input type="text" v-model="nombre" class="form-control">
            <button type="submit" class="btn btn-warning">Agregar tarea</button>
        </div>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'Agregar',
    data() {
        return {
            nombre: ''
        }
    },
    methods:{
        ...mapActions(['agregarTarea'])
    }
}
</script>