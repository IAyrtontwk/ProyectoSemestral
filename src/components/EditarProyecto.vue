<template>
    <div class="container">
        <div id="BuscarProyecto">
            <form>
                <label for="pname">Nombre Proyecto:</label>
                <input type="text" placeholder="Ingrese nombre del proyecto" name="pname">
                <button type="submit">Buscar Proyecto</button>
            </form>
        </div>
        <div id="resultadosProyectos">
        </div>
    </div>
</template>

<script>
    export default {
        name: "EditarProyecto"
    }
</script>

<style scoped>

</style>