<template lang="pug">
  .wrapper
    headerPage
    tabs
    .page-block
      .container-admin.container-admin_page
        router-view
      .modal
        .modal__text Сообщение отправлено
        button.modal__button.admin-button(type="button") Закрыть
   
 </template>
 


<script>
import headerPage from "./components/headerPage";
import tabs from "./components/tabs";
import admin from "./components/admin";
import adminBlog from "./components/adminBlog";
import adminWorks from "./components/adminWorks";

const data = [
  { id: 1, title: "Html", percent: 20, category: 0 },
  { id: 2, title: "PHP", percent: 20, category: 1 },
  { id: 3, title: "CSS", percent: 20, category: 0 },
  { id: 4, title: "Node.js", percent: 20, category: 1 },
  { id: 5, title: "Mongo", percent: 20, category: 1 },
  { id: 6, title: "Git", percent: 20, category: 2 },
  { id: 7, title: "Gulp", percent: 20, category: 2 }
];

import { mapActions, mapState, mapGetters } from "vuex";

export default {
  components: {
    headerPage,
    tabs,
    admin,
    adminBlog,
    adminWorks
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" src="./scss/layout.scss">
</style>
