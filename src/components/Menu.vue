<template>
    <div class="topnav">
        <div>
            <div class="topnavleft">
                <router-link to="/home">Home</router-link>
                <router-link to="/senadores">Senadores</router-link>
                <router-link to="/diputados">Diputados</router-link>
                <router-link to="/buscarpais">Pais</router-link>
            </div>
            <div class="topnavright">
                <router-link to="/login"> Login </router-link>
                <router-link to="/registro"> Registro </router-link>
            </div>
            <div class="dropdown">
                <button class="dropbtn">Nuevo</button>
                <div class="dropdown-content">
                    <router-link to="/nuevoperfil">Perfil</router-link>
                    <router-link to="/nuevoproyecto">Proyecto</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Menu"
    }
</script>

<style scoped>

</style>