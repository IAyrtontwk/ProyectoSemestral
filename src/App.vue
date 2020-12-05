<template>
  <div id="app">
    <Home></Home>
    <h1> Contenido div app</h1>
  </div>
</template>

<script>
import Home from "./components/Home";
export default {
  name: 'App',
  components: {
    Home,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
 @import "./assets/css/style.css";
</style>
