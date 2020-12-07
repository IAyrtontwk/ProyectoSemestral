<template>
    <div class="container">
        <form action="/action_page.php">
            <div class="container">
                <h1>Registro de nuevo usuario</h1>
                <p> Todos los datos son obligatorios.</p>

                <hr>
                <label for="fname"><b>Nombre: </b></label>
                <input type="text" placeholder="Ingrese su nombre" name="fname" id="fname" required>

                <label for="lname"><b>Apellido: </b></label>
                <input type="text" placeholder="Ingrese su apellido" name="lname" id="lname" required>

                <label for="email"><b>Email: </b></label>
                <input type="text" placeholder="Ingrese su email" name="email" id="email" required>

                <label for="psw"><b>Contraseña: </b></label>
                <input type="password" placeholder="Contraseña" name="psw" id="psw" required>

                <label for="psw-repeat"><b>Repetir contraseña: </b></label>
                <input type="password" placeholder="Repetir contraseña" name="psw-repeat" id="psw-repeat" required>
                <hr>
                <p> Esto es un texto cualquiera <a href="#">con enlace</a>.</p>

                <button type="submit" class="registerbtn">Finalizar</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Registro"
    }
</script>

<style scoped>

</style>