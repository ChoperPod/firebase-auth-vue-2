<template>
    <div>
        <h1>Ruta Protegida</h1>
        <p>{{ usuario.email }}</p>
        <!-- <ul>
            <li v-for="(item, index) in tareas" :key="index">
                {{item.id}} - {{item.nombre}}
            </li>
        </ul> -->
        <ul class="list-group mt-5">
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
        <router-link to="/Agregar">
            <button class="mt-3 btn btn-success">Agregar tarea</button>
        </router-link>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    name: 'Inicio',
    methods: {
        ...mapActions(['getTareas', 'eliminarTarea'])
    },
    computed: {
        ...mapState(['usuario', 'tareas'])
    },
    created() {
        this.getTareas()
    }
}
</script>