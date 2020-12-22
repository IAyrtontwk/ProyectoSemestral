<template>
    <div class="container">
        <h1> Contenido Nuevo Perfil Honorable</h1>
        <div>
            <br>Senador<input type="radio" name="camara" v-model="camara" value="4">
            Diputado<input type="radio" name="camara" v-model="camara" value="5">
            <br><b>Nombre Congresista:  </b><input v-model="nombre" type="text" >
            <br><b>Apellidos Congresista:   </b><input v-model="apellidos" type="text" >
            <!------ Seleccion territorio manual
            <br>Cisrcunscripcion<input type="radio" name="territorio" v-model="territorio" value="7">
            Distrito<input type="radio" name="territorio" v-model="territorio" value="8">
            ------->
            <br><b>Numero territorio:   </b><input v-model="numTerritorio" type="number" >
            <br><b>Email :  </b><input v-model="email" type="text" >  

            <br><b>Partido Politico:    </b><select v-model="partidoPolitico">
                <option v-for="partido in partidos" v-bind:key="partido.value">
                    {{ partido.text }}
                </option>
            </select>
            <p> {{ partidoPolitico }} </p>

        </div>
        <button @click="nuevoPerfil(camara, nombre, apellidos, numTerritorio, partidoPolitico, email)">
            <router-link to='/home'> Finalizar </router-link>
        </button>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "NuevoPerfil",
        data() {
            return {
                perfiles: null,
                territorioC: null,
                partidoPolitico: null,
                partidos: [ { text: 'Independiente', value: '9'},
                            { text: 'Oposicion1', value: '10'},
                            { text: 'Oposicion2', value: '11'},
                            { text: 'Oposicion3', value: '12'},
                            { text: 'Oficialismo1', value: '13'},
                            { text: 'Oficialismo2', value: '14'},
                            { text: 'Oficialismo3', value: '15'}]
            }
        },
        methods: {
            nuevoPerfil(camaraC, nombreC, apellidosC, numTerritorioC, partidoC, emailC) {
                if(camaraC == 4) {
                    this.territorioC = 8
                }else{
                    this.territorioC = 7
                }
                const perfilNuevo = {
                    camara: camaraC,
                    nombre: nombreC,
                    apellidos: apellidosC,
                    territorio: this.territorioC,
                    numTerritorio: numTerritorioC,
                    partido: partidoC,
                    email: emailC
                };
                axios.post('http://127.0.0.1:8000/api/perfiles', perfilNuevo)
                .then(response => {this.perfiles.push(response.data.data);
                alert("Perfil Guardado")})
            },
        },
    }
</script>

<style scoped>

</style>