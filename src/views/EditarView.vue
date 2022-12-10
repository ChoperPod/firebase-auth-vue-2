<template>
    <div>
        <h1>Editar</h1>
        {{ tarea.id }} - {{tarea.nombre}}
        <form @submit.prevent="editarTarea(tarea)" class="from-inline">
            <div class="input-group">
                <div class="input-group-text">Nombre de la tarea: </div>
            <input type="text" v-model="tarea.nombre" class="form-control">
            <button type="submit" class="btn btn-warning">Editar tarea</button>
        </div>
        </form>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
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
    }
}
</script>