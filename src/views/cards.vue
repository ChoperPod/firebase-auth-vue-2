<template>
    <div>
        <h1>Cards</h1>
        <b-button variant="success">Boton</b-button>
        <b-button variant="info">Boton</b-button>
        <b-button variant="danger">Boton</b-button>
        <b-button variant="primary">Boton</b-button>
        <b-button variant="warning">Boton</b-button>
        <b-button variant="dark">Boton</b-button>

        <b-row class="mt-5">
            <b-col cols="12" md="4">
                <b-card img-src="https://picsum.photos/600/300/?image=25" img-top title="Success card">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae deserunt repellendus tempore
                        nisi unde harum expedita blanditiis similique? Molestiae sapiente vitae odit provident
                        dignissimos autem cupiditate ullam esse, dolor eaque?</p>
                    <b-button variant="success" href="#">Boton</b-button>
                </b-card>
            </b-col>
            <b-col cols="12" md="4">
                <b-card img-src="https://picsum.photos/600/300/?image=25" img-top title="Info card">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae deserunt repellendus tempore
                        nisi unde harum expedita blanditiis similique? Molestiae sapiente vitae odit provident
                        dignissimos autem cupiditate ullam esse, dolor eaque?</p>
                    <b-button variant="info" href="#">Boton</b-button>
                </b-card>
            </b-col>
            <b-col cols="12" md="4">
                <b-card img-src="https://picsum.photos/600/300/?image=25" img-top title="Danger card">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae deserunt repellendus tempore
                        nisi unde harum expedita blanditiis similique? Molestiae sapiente vitae odit provident
                        dignissimos autem cupiditate ullam esse, dolor eaque?</p>
                    <b-button variant="danger" href="#">Boton</b-button>
                </b-card>
            </b-col>
        </b-row>
        <b-row class="mt-5">
            <b-col cols="12" md="4">
                <b-card img-src="https://picsum.photos/600/300/?image=25" img-top title="Primary card">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae deserunt repellendus tempore
                        nisi unde harum expedita blanditiis similique? Molestiae sapiente vitae odit provident
                        dignissimos autem cupiditate ullam esse, dolor eaque?</p>
                    <b-button variant="primary" href="#">Boton</b-button>
                </b-card>
            </b-col>
            <b-col cols="12" md="4">
                <b-card img-src="https://picsum.photos/600/300/?image=25" img-top title="Warning card">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae deserunt repellendus tempore
                        nisi unde harum expedita blanditiis similique? Molestiae sapiente vitae odit provident
                        dignissimos autem cupiditate ullam esse, dolor eaque?</p>
                    <b-button variant="warning" href="#">Boton</b-button>
                </b-card>
            </b-col>
            <b-col cols="12" md="4">
                <b-card img-src="https://picsum.photos/600/300/?image=25" img-top title="Dark card">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae deserunt repellendus tempore
                        nisi unde harum expedita blanditiis similique? Molestiae sapiente vitae odit provident
                        dignissimos autem cupiditate ullam esse, dolor eaque?</p>
                    <b-button variant="dark" href="#">Boton</b-button>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    name: 'cards'
}
</script>