<template>
    <div >
        <div class="topnav">
            <div class="topnavleft">
                <router-link to="/home">Home</router-link>
                <router-link to="/senadores">Senadores</router-link>
                <router-link to="/diputados">Diputados</router-link>
                <router-link to="/buscarpais">Pais</router-link>
            </div>
            <div class="topnavright">
                <div class="dropdown">
                    <button>Nuevo</button>
                    <div class="dropdown-content">
                        <router-link to="/nuevoperfil">Perfil</router-link>
                        <router-link to="/nuevoproyecto">Proyecto</router-link>
                    </div>
                </div>
                <button onclick="document.getElementById('id01').style.display='block'" >Iniciar Sesion</button>
                <router-link to="/registro"> Registro </router-link>
            </div>
        </div>

        <div id="id01" class="modal">
            <form class="modal-content animate" action="/action_page.php" method="post">
                <div class="imgcontainer">
                    <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
                    <img src="../assets/user.png" alt="Avatar" class="avatar">
                </div>
                <h3> Iniciar Sesión</h3>
                <div class="container">
                    <label for="uname"><b>Email</b></label>
                    <input type="text" placeholder="Ingrese su correo electronico" name="uname" required>

                    <label for="psw"><b>Contraseña</b></label>
                    <input type="password" placeholder="Contraseña" name="psw" required>

                    <button class="loginbtn" type="submit">Iniciar Sesión</button>
                    <label>
                        <input type="checkbox" checked="checked" name="remember"> Recordarme
                    </label>
                    <span class="psw"><a href="#">Olvidó su contraseña?</a></span>
                </div>

                <div class="container" style="background-color:#f1f1f1">
                    <div class="col">
                        <p> Ingresar con una red social:</p>
                        <a href="#" class="fb btn">
                            <i class="fa fa-facebook fa-fw"></i> Iniciar sesión con Facebook
                        </a>
                        <a href="#" class="twitter btn">
                            <i class="fa fa-twitter fa-fw"></i> Iniciar sesión con Twitter
                        </a>
                        <a href="#" class="google btn"><i class="fa fa-google fa-fw">
                        </i> Iniciar sesión con Google
                        </a>
                    </div>
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