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


        <form style="border:1px solid #ccc">
            <div class="ui-card  register-card ">
                <div>
                    <div class="ui-form tax_id">
                        <label class="andes-form-control andes-form-control--textfield register-input">
                            <div class="andes-form-control__control">
                                <span class="andes-form-control__label">RUT</span>
                                <input type="text" value="" id="tax_id" name="tax_id" rows="1" class="andes-form-control__field" maxlength="120">
                            </div>
                            <div class="andes-form-control__border"></div>
                            <span class="andes-form-control__message"></span>
                        </label></div><div class="ui-form business_name">
                    <label class="andes-form-control andes-form-control--textfield register-input">
                        <div class="andes-form-control__control">
                            <span>Razón social</span><input type="text" value="" id="business_name" name="business_name" rows="1" class="andes-form-control__field" maxlength="120">
                        </div>
                        <div class="andes-form-control__border"></div>
                        <span class="andes-form-control__message"></span>
                    </label></div><div class="ui-form email">
                    <label class="andes-form-control andes-form-control--textfield register-input">
                        <div class="andes-form-control__control">
                            <span class="andes-form-control__label">E-mail</span>
                            <input type="text" value="" id="email" name="email" rows="1" class="andes-form-control__field" maxlength="120">
                        </div>
                        <div class="andes-form-control__border"></div>
                        <span class="andes-form-control__message">Asegurate de tener acceso a este e-mail</span>
                    </label>
                </div>
                    <div class="ui-form pass">
                        <label class="andes-form-control andes-form-control--textfield andes-form-control--error register-input">
                            <div class="andes-form-control__control">
                                <span class="andes-form-control__label">Clave</span>
                                <input type="password" value="" id="pass" name="pass" rows="1" class="andes-form-control__field" maxlength="20">
                            </div>
                            <div class="andes-form-control__border"></div>
                            <span class="andes-form-control__message">Ingresa una clave para seguir.</span>
                        </label>
                    </div>
                </div>
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