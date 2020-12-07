<template>
    <div class="container">
        <form action="/action_page.php">
            <div class="container">
                <h1>Registro de nuevo usuario</h1>
                <p> Todos los datos son obligatorios.</p>

                <hr>
                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Ingrese su email" name="email" id="email" required>

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" id="psw" required>

                <label for="psw-repeat"><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required>
                <hr>
                <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

                <button type="submit" class="registerbtn">Register</button>
            </div>

            <div class="container signin">
                <p>Already have an account? <a href="#">Sign in</a>.</p>
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