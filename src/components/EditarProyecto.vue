<template>
    <div class="container">
        <br>
        <div id="BuscarProyecto row">
            <b> Titutlo Proyecto:</b><input v-model="buscar" type="text">
            <button> Buscar </button>
        </div>
        <div id="resultadosProyectos row">
            <table class="tablaProyectos">
                <tr>
                    <th>Fecha</th> 
                    <th style="width:50%">Titulo Proyecto</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                </tr>
            </table>
            <table class="tablaProyectos" v-for="proyecto in proyectos" :key="proyecto.titulo">
                <tr>
                    <td> {{ proyecto.fecha }} </td>
                    <td> {{ proyecto.titulo }} </td>
                    <td v-if="proyecto.estado === 1"> Aprobado </td>
                    <td v-else-if="proyecto.estado === 2"> Rechazado </td>
                    <td v-else> En trámite </td>   
                    <td>
                        <button @click="mostrarEditar()"> <img src="../assets/editar.png" alt="editarProyecto"> </button>
                        <button @click="eliminarProyecto(proyecto.id)"> <img src="../assets/eliminar.png" alt="eliminarProyecto"> </button>
                    </td>    
                </tr>
                <tr>
                    <td v-if="editar"> <input v-model="fecha" type="text"> </td>
                    <td v-if="editar"> <input v-model="titulo" type="text"> </td>
                    <td v-if="editar"> <input v-model="estado" type="text"> </td>
                    <td> 
                        <button v-if="editar" @click="editarProyecto(proyecto.id, fecha, titulo, estado, proyecto.camara, proyecto.urlProyecto, proyecto.urlVotacion)"> Guardar </button>
                    </td>
                </tr>           
            </table>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "EditarProyecto",
        data() {
            return {
                proyectos: null,
                hasError: false,
                loading:true,
                editar: false
            }
        },
        methods: {
            eliminarProyecto(id) {
                axios.delete('http://127.0.0.1:8000/api/proyectos/' + id)
                .then(() => {this.proyectos = this.proyectos.filter(proyecto => proyecto.id !== id);});
            },
            editarProyecto(idP, fechaP, tituloP, estadoP, camaraP, urlProy, urlVot) {
                const nuevoProyecto = {
                    id: idP,
                    titulo: tituloP,
                    estado: estadoP,
                    fecha: fechaP,
                    camara: camaraP,
                    urlProyecto: urlProy,
                    urlVotacion: urlVot
                };
                axios.put('http://127.0.0.1:8000/products/' + nuevoProyecto.id, nuevoProyecto)
                .then(response => {this.proyectos.push(response.data.data);
                alert("Proyecto Actualizado")})
            },
            mostrarEditar() {
                this.editar = !this.editar
            }
        },
        mounted() {
            axios
            .get('http://127.0.0.1:8000/api/proyectos')
            .then(response => (this.proyectos = response.data.data))
            // eslint-disable-next-line no-unused-vars
            .cath(error => this.hasError = true)
            .finally(() => this.loading = false)
        }
    }
</script>

<style scoped>

</style>