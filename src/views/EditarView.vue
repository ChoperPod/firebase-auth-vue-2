<template>
    <div>
        <h1>Editar</h1>
        <form @submit.prevent="editarTarea(tarea)" class="from-inline">
            <div class="input-group">
                <div class="input-group-text">Nombre de la tarea: </div>
            <input type="text" v-model="$v.tarea.nombre.$model" class="form-control">
            <button type="submit" class="btn btn-warning" :disabled="$v.tarea.$invalid">Editar tarea</button>
        </div>
        </form>
        <!-- {{$v.tarea.nombre}} -->
        <small class="text-danger" v-if="!$v.tarea.nombre.required">Campo requerido</small>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { required, minLength } from 'vuelidate/lib/validators'
export default {
    name: 'Editar',
    data() {
        return {
            id: this.$route.params.id
        }
    },
    created() {
        this.getTarea(this.id)
    },
    methods: {
        ...mapActions(['getTarea','editarTarea'])
    },
    computed:{
        ...mapState(['tarea'])
    },
    validations:{
        tarea:{
            nombre:{required}
        }
    }
}
</script>