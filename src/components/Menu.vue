<template>
    <div class="topnav">
        <div class="topnavleft">
            <router-link to="/home">Home</router-link>
            <router-link to="/senadores">Senadores</router-link>
            <router-link to="/diputados">Diputados</router-link>
            <router-link to="/buscarpais">Pais</router-link>
        </div>
        <div class="topnavright">
            <div class="dropdown">
                <button class="dropbtn">Nuevo</button>
                <div class="dropdown-content">
                    <router-link to="/nuevoperfil">Perfil</router-link>
                    <router-link to="/nuevoproyecto">Proyecto</router-link>
                    <router-link to="/perfilcongresista">PerfilPersona</router-link>
                    <router-link to="/editarproyecto">EditarProyecto</router-link>
                </div>
            </div>
            <button onclick="document.getElementById('iniciosesion').style.display='block'" class="navlogin" >Iniciar Sesion</button>
            <router-link to="/registro"> Registro </router-link>
        </div>
        <div id="iniciosesion" class="loginbox">
            <form class="formlogin" action="/action_page.php" method="post">
                <div class="imgcontainer">
                    <span onclick="document.getElementById('iniciosesion').style.display='none'" class="close" title="Close Modal">&times;</span>
                    <img src="../assets/user.png" alt="Avatar" class="avatar">
                </div>
                <h3> Iniciar Sesión</h3>
                <div class="container">
                    <div class="container">
                        <label for="email" class="label-form"><b>Email</b></label>
                        <input type="email" class="login-form" placeholder="Ingrese su email" name="email" required>
                        <div class="borderinput"></div>
                    </div>
                    <div class="container">
                        <label for="psw" class="label-form"><b>Contraseña</b></label>
                        <input type="password" class="login-form" placeholder="Ingrese contraseña" name="psw" required>
                        <div class="borderinput"></div>
                    </div>
                    <button class="btn login" type="submit">Iniciar Sesión</button>
                    <span class="psw"><a href="#">Olvidó su contraseña?</a></span>
                </div>
                <div class="container" style="background-color:#f1f1f1">
                    <p> Ingresar con una red social:</p>
                    <a href="#" class="fb rsbtn">Iniciar sesión con Facebook</a>
                    <a href="#" class="twitter rsbtn">Iniciar sesión con Twitter</a>
                    <a href="#" class="google rsbtn">Iniciar sesión con Google</a>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Menu",
        data() {
            return {
                title: "Home",
                IsTrue: true
            }
        },
        methods: {
        }
    }

</script>

<style scoped>

</style>