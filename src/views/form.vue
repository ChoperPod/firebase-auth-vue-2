<template>
    <div class="container mt-5">
        <h1>Formularios</h1>
        <form>
            <b-row>
                <b-col md="3">
                    <b-form-input type="text" v-model="texto" :state="comprobar"
                        placeholder="ingrese mas de 3 caracteres"></b-form-input>
                    <div>texto: <strong>{{ texto }}</strong></div>
                </b-col>
                <b-col md="3">
                    <b-form-select v-model="select" :options="animales"></b-form-select>
                    <div>Seleccion: <strong>{{ select }}</strong></div>
                </b-col>
                <b-col md="3">
                    <b-form-radio-group v-model="radio" :options="animalesRadio"></b-form-radio-group>
                    <div>Seleccion: <strong>{{ radio }}</strong></div>
                </b-col>
                <b-col md="3">
                    <b-form-checkbox-group v-model="check" :options="animalesCheck"></b-form-checkbox-group>
                    <div>Seleccion: <strong>{{ check }}</strong></div>
                </b-col>
            </b-row>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Form',
    data() {
        return {
            texto: '',
            radio: null,
            check: [],
            select: null,
            animales: [
                { value: null, text: 'Seleccione un animal' },
                { value: 'Perro', text: 'i killyou madafaka' },
                { value: 'Gato', text: 'meow meow raul' },
                { value: 'Pato', text: 'cuack cuack nigga' }
            ],
            animalesRadio: [
                { value: 'Perro', text: 'i killyou madafaka' },
                { value: 'Gato', text: 'meow meow raul' },
                { value: 'Pato', text: 'cuack cuack nigga' }
            ],
            animalesCheck: [
                { value: 'Perro', text: 'i killyou madafaka' },
                { value: 'Gato', text: 'meow meow raul' },
                { value: 'Pato', text: 'cuack cuack nigga' }
            ]
        }
    },
    computed: {
        comprobar() {
            return this.texto.length > 2 ? true : false
        }
    }
}
</script>