<template>
    <div>
        <h1>Ruta Protegida</h1>
        <p>{{ usuario.email }}</p>
        <!-- {{carga}} -->
        <!-- <ul>
            <li v-for="(item, index) in tareas" :key="index">
                {{item.id}} - {{item.nombre}}
            </li>
        </ul> -->
        <div v-if="carga" class="text-center mt-5">
            <h3>Cargando contenido...</h3>
            <pulse-loader :loading="carga" class="mb-2"></pulse-loader>
            <!-- <grid-loader :loading="loading" :color="color" :size="size"></grid-loader> -->
        </div>
        <router-link to="/Agregar">
            <!-- <div class="d-grip gap-2 col-6 mx-auto"> -->
            <button class="btn btn-success" type="button">Agregar tarea</button>
            <!-- </div> -->
        </router-link>
        <ul class="list-group mt-3" v-if="!carga">
            <li v-for="(item, index) in tareas" :key="index" class="list-group-item">
                {{ item.nombre }} - {{ item.id }}
                <div class="float-end">
                    <router-link :to="{ name: 'Editar', params: { id: item.id } }">
                        <button class="btn btn-warning ms-3">Editar</button>
                    </router-link>
                    <button @click="eliminarTarea(item.id)" class="btn btn-danger ms-3">Eliminar</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
// import GridLoader from 'vue-spinner/src/GridLoader.vue'
export default {
    name: 'Inicio',
    methods: {
        ...mapActions(['getTareas', 'eliminarTarea'])
    },
    computed: {
        ...mapState(['usuario', 'tareas', 'carga'])
    },
    created() {
        this.getTareas()
    },
    components: {
        PulseLoader
    }
}
</script>