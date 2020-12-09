<template>
    <div class="container">
        <h1> Contenido Nuevo Perfil Honorable</h1>
        <form action="/action_page.php">
            <div class="ui-card">
                <div class="ui-form fname">
                    <label class="andes-form-control andes-form-control--textfield register-input"></label>
                    <div class="andes-form-control__control">
                        <span class="andes-form-control__label">Nombre Congresista</span>
                        <input type="text" value="" id="fname" name="fname" rows="1" class="andes-form-control__field" maxlength="120">
                    </div>
                    <div class="andes-form-control__border"></div>
                    <span class="andes-form-control__message"></span>
                </div>
                <div class="ui-form lname">
                    <label class="andes-form-control andes-form-control--textfield register-input"></label>
                    <div class="andes-form-control__control">
                        <span class="andes-form-control__label">Apellidos</span>
                        <input type="text" value="" id="lname" name="lname" rows="1" class="andes-form-control__field" maxlength="120">
                    </div>
                    <div class="andes-form-control__border"></div>
                    <span class="andes-form-control__message"></span>
                </div>
                <div class="ui-form partido">
                    <label class="andes-form-control andes-form-control--textfield register-input"></label>
                    <div class="andes-form-control__control">
                        <span class="andes-form-control__label">Partido Politico</span>
                        <input type="text" value="" id="partido" name="partido" rows="1" class="andes-form-control__field" maxlength="120">
                    </div>
                    <div class="andes-form-control__border"></div>
                    <span class="andes-form-control__message"></span>
                </div>
                <div class="ui-form territorio">
                    <label class="andes-form-control andes-form-control--textfield register-input"></label>
                    <div class="andes-form-control__control">
                        <span class="andes-form-control__label">Circunscripción/Distrito</span>
                        <input type="text" value="" id="territorio" name="territorio" rows="1" class="andes-form-control__field" maxlength="120">
                    </div>
                    <div class="andes-form-control__border"></div>
                    <span class="andes-form-control__message"></span>
                </div>
                <div class="ui-form email">
                    <label class="andes-form-control andes-form-control--textfield register-input"></label>
                    <div class="andes-form-control__control">
                        <span class="andes-form-control__label">Email contacto</span>
                        <input type="text" value="" id="email" name="email" rows="1" class="andes-form-control__field" maxlength="120">
                    </div>
                    <div class="andes-form-control__border"></div>
                    <span class="andes-form-control__message"></span>
                </div>
                <button class="btn" type="submit">Finalizar</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "NuevoPerfil"
    }
</script>

<style scoped>

</style>