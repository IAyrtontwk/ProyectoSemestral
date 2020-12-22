<template>
    <div class="container">
        <h1> Contenido de nuevo Proyecto</h1>
            <div>
                <br>Camara alta<input type="radio" name="camara" v-model="camara" value="4">
                <br>Camara baja<input type="radio" name="camara" v-model="camara" value="5">
                <br><b>Titulo Proyecto:</b><input v-model="titulo" type="text" >
                <br>Aprobado<input type="radio" name="estado" v-model="estado" value="1">
                Rechazado<input type="radio" name="estado" v-model="estado" value="2">
                En tramite<input type="radio" name="estado" v-model="estado" value="3">
                <!---- SELECT QUE NO SIRVE
                <br><b>Estado del Proyecto:</b><select v-model="seleccionEstado">
                    <option v-for="opcion in opcionesEstado" :key="opcion.value">
                        {{ opcion.text }}
                    </option>
                </select>
                ------>
                <br><b>Fecha del proyecto:</b><input v-model="fecha" type="text" >
                <br><b>URL del Proyecto:</b><input v-model="urlProyecto" type="url" >
                <br><b>URL Votacion:</b><input v-model="urlVotacion" type="url" >
                <br><button @click="nuevoProyecto(titulo, seleccionEstado, fecha, camara, urlProyecto, urlVotacion)">Finalizar</button>
            </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "NuevoProyecto",
        data() {
            return {
                proyectos: null,
                estado: ''
                /*
                seleccionEstado: '',
                opcionesEstado: [{ text: 'Aprobado', value: '1'},
                                 { text: 'Rechazado', value: '2'},
                                { text: 'En tramite', value: '3'}]
                */
            }
        },
        methods: {
            nuevoProyecto(tituloP, estadoP, fechaP, camaraP, urlProy, urlVot) {
                const proyectoNuevo = {
                    titulo: tituloP,
                    estado: estadoP,
                    fecha: fechaP,
                    camara: camaraP,
                    urlProyecto: urlProy,
                    urlVotacion: urlVot,
                };
                axios.post('http://127.0.0.1:8000/api/proyectos', proyectoNuevo)
                .then(response => {this.proyectos.push(response.data.data);
                alert("Proyecto Guardado")})
            },
        }
    }
</script>

<style scoped>

</style>