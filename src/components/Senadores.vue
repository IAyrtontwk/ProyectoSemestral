<template>
    <div class="container">
        <h1> Contenido Senadores </h1>
        <section>
            <section>
                <img src="../assets/icosahedron.png" alt="distribución senadores">
            </section>
            <section>
                <table class='tablaProyectos' v-for="proyecto in proyectos" :key="proyecto.id">
                    <tr>
                        <th>Fecha</th> 
                        <th style="width:50%">Nombre Proyecto</th>
                        <th>Estado</th>
                        <th >Votacion</th> 
                    </tr>
                    <tr>
                        <td>{{ proyecto.fecha }}</td>
                        <td><a href="proyecto.urlProyecto"> {{ proyecto.titulo }} </a></td>

                        <td v-if="proyecto.estado === 1"> Aprobado </td>
                        <td v-else-if="proyecto.estado === 2"> Rechazado </td>
                        <td v-else> En trámite </td>

                        <td v-if="proyecto.urlVotacion"><a href="proyecto.urlVotacion"> SI </a></td>
                        <td v-else> NO </td>
                    </tr>
                </table>
            </section>
        </section>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "Senadores",
        data() {
            return {
                proyectos: null,
                hasError: false,
                loading:true
            }
        },
        methods: {
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