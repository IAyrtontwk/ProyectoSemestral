<template>
    <div class="container">
        <div>
            <table>

            </table>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "PerfilCongresista",
        data() {
            return {
                perfiles: null,
                hasError: false,
                loading:true
            }
        },
        methods: {
        },
            mounted() {
                axios
                .get('http://127.0.0.1:8000/api/perfiles')
                .then(response => (this.perfiles = response.data.data))
                // eslint-disable-next-line no-unused-vars
                .cath(error => this.hasError = true)
                .finally(() => this.loading = false)
            }
    }
</script>

<style scoped>

</style>