<template>
    <div class="container">
        <h1> Contenido de nuevo Proyecto</h1>
        <form style="border:1px solid #ccc">
            <div class="ui-card  register-card ">
                <div>
                    <div class="ui-form tax_id">
                        <label class="andes-form-control andes-form-control--textfield register-input">
                            <div class="andes-form-control__control">
                                <span class="andes-form-control__label">Titulo del proyecto</span>
                                <input type="text" value="" id="tax_id" name="tax_id" rows="1" class="andes-form-control__field" maxlength="120">
                            </div>
                            <div class="andes-form-control__border"></div>
                            <span class="andes-form-control__message"></span>
                        </label></div><div class="ui-form business_name">
                    <label class="andes-form-control andes-form-control--textfield register-input">
                        <div class="andes-form-control__control">
                            <span class="andes-form-control__label">Estado del proyecto</span>
                            <input type="text" value="" id="business_name" name="business_name" rows="1" class="andes-form-control__field" maxlength="120">
                        </div>
                        <div class="andes-form-control__border"></div>
                        <span class="andes-form-control__message"></span>
                    </label></div>
                    <div class="ui-form email">
                    <label class="andes-form-control andes-form-control--textfield register-input">
                        <div class="andes-form-control__control">
                            <span class="andes-form-control__label">Fecha del proyecto</span>
                            <input type="text" value="" id="email" name="email" rows="1" class="andes-form-control__field" maxlength="120">
                        </div>
                        <div class="andes-form-control__border"></div>
                        <span class="andes-form-control__message">Colocar calendario</span>
                    </label>
                    </div>
                    <div class="ui-form url">
                        <label class="andes-form-control andes-form-control--textfield andes-form-control--error register-input">
                            <div class="andes-form-control__control">
                                <span class="andes-form-control__label">URL del proyecto</span>
                                <input type="text" value="" id="url" name="url" rows="1" class="andes-form-control__field" maxlength="20">
                            </div>
                            <div class="andes-form-control__border"></div>
                            <span class="andes-form-control__message">Ingresa una url válida</span>
                        </label>
                    </div>
                    <div class="ui-form url-vot">
                        <label class="andes-form-control andes-form-control--textfield andes-form-control--error register-input">
                            <div class="andes-form-control__control">
                                <span class="andes-form-control__label">URL de la votacion</span>
                                <input type="text" value="" id="url-vot" name="url-vot" rows="1" class="andes-form-control__field" maxlength="20">
                            </div>
                            <div class="andes-form-control__border"></div>
                            <span class="andes-form-control__message">Se deberia mostrar si se elige el estado Terminado</span>
                        </label>
                    </div>
                    <button type="submit" class="registerbtn">Finalizar</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "NuevoProyecto"
    }
</script>

<style scoped>

</style>