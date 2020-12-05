import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import Home from "./components/Home";
import Login from "./components/Login";
import Registro from "./components/Registro";
import Diputados from "./components/Diputados";
import Senadores from "./components/Senadores";
import NuevoPerfil from "./components/NuevoPerfil";
import BuscarEnPais from "./components/BuscarEnPais";
import PerfilCongresista from "./components/PerfilCongresista";
import NuevoProyecto from "./components/NuevoProyecto";


Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  {path:'/home', name:Home, component: Home},
  {path:'/', component: Home},
  {path:'/login', component: Login},
  {path:'/registro',name:Registro, component: Registro},
  {path:'/diputados', name:Diputados, component: Diputados},
  {path:'/senadores', name:Senadores, component: Senadores},
  {path:'/buscarpais', component: BuscarEnPais},
  {path: '/perfilcongresista', component: PerfilCongresista},
  {path: '/nuevoperfil', component: NuevoPerfil},
  {path: '/nuevoproyecto', name: NuevoProyecto, component: NuevoProyecto},

]

const router = new VueRouter({
  routes,
  node: 'history'
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
