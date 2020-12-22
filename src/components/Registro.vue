<template>
    <div class="container">
        <div class="cardRegistro">
            <h3>Registro de nuevo usuario</h3>
            <p> Todos los datos son obligatorios.</p>
            <hr>
            <div>
            <b>Nombre: </b><input v-model="nombre" type="text" placeholder="Ingrese su nombre" required>
            <br><b>Apellido: </b><input v-model="apellido" type="text" placeholder="Ingrese su apellido" required>
            <br><b>Email: </b><input v-model="email" type="text" placeholder="Ingrese su email" required>
            <br><b>Contraseña: </b><input v-model="contraseña" type="password" placeholder="Ingrese su contraseña" required>
            <br><b>Fecha de nacimiento: </b><input v-model="fechaNac" type="text" required>
            </div>
            <hr>
            <button @click="registrarUsuario(nombre,apellido,email,contraseña,fechaNac)">
                <router-link to='/home'> Finalizar </router-link>
            </button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "Registro",
        data() {
            return {
                usuarios: null
            }
        },
        methods: {
            registrarUsuario(nombreU, apellidoU, emailU, contraseñaU, fechaNacimientoU) {
                const nuevoUsuario = {
                    nombre: nombreU,
                    apellido: apellidoU,
                    email: emailU,
                    contraseña: contraseñaU,
                    fechaNacimiento: fechaNacimientoU
                };
                axios.post('http://127.0.0.1:8000/api/usuarios', nuevoUsuario)
                .then(response => {this.usuarios.push(response.data.data);
                alert("Usuario Registrado")})
            },
        }
    }
</script>

<style scoped>

</style>