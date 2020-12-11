<template>
    <div class="container" id="BuscarEnPais">
        <div id="imagenpais">
            <ul v-for="region in regiones" v-bind:key="region">
                <li>{{region}}</li>
            </ul>
        </div>
        <div id="territoriobox">
            <div>
                <p>Deberian ir los distritos y circunscripciones</p>
            </div>
        </div>
        <div id="Resultados">

        </div>
    </div>
</template>

<script>
    export default {
        name: "BuscarEnPais",
        data() {
            return{
                regiones:['I Region','II Region','III Region','IV Region','V Region','VI Region','VII Region','VIII Region','IX Region','X Region','XI Region','XII Region','XIII Region','XIV Region','XV Region',]
            }
        }
    }
</script>

<style scoped>

</style>