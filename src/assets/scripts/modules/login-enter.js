import Vue from "vue";
import axios from "axios";

new Vue({
  el: "#login-component",
  data() {
    return {
      user: {
        name: "admin180586",
        password: "ue3gmf"
      }
    };
  },
  methods: {
    login() {
      axios
        .post("http://webdev-api.loftschool.com/login", this.user)
        .then(response => {
          if (response.status === 200) {
            const ttl = Math.floor(Date.now() / 1000 + response.data.ttl);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("ttl", ttl);
            window.location.href = "blog.html";
          }
        })
        .catch(e => console.error(e));
    }
  },
  template: "#login-form"
});