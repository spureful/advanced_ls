import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueAxios from "vue-axios";
import store from "./store";
import axios from "./requests";

//store.$axios = axios;

new Vue({
  el: "#admin-app",
  router,
  store,
  axios,
  render: h => h(App)
});
