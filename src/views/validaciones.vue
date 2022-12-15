<template>
    <div class="container mt-5">
        <h1>Validaciones</h1>
        <form>
            <input type="email" placeholder="Ingresa un email" class="form-control my-3">
            <p>{{email}}</p>
        </form>
    </div>
</template>

<script>
import { required, email } from '@vuelidate/validators'
export default {
    name: "Validaciones",
    data() {
        return {
            email: ''
        }
    },
    Validations: {
        email: { required, email }
    }
};
</script>