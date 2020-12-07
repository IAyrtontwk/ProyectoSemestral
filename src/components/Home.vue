<template>
    <div class="Home">
        <div class="container">
            <h1> Contenido HOME </h1>
            <div class="row">
                <div class="col">
                    <router-link to="/senadores">
                        <img src="../assets/senado.png" alt="logosenado">
                        <p>Senadores</p>
                    </router-link>
                </div>
                <div class="col">
                    <router-link to="/diputados">
                        <img src="../assets/senado.png" alt="logodiputados">
                        <p>Diputados</p>
                    </router-link>
                </div>
            </div>
            <div class="row">
                <router-link to="/buscarpais">
                    <img src="../assets/senado.png" alt="imagenpais">
                    <p>BuscarPais</p>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
    }
</script>

<style scoped>

</style>