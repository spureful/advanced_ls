<template lang="pug">
  .wrapper
    header.header-admin
      .container-admin
        .header-admin__row
          .header-admin__title-block
            h2.header-admin__title Панель администрирования
          .header-admin__link-block
            a.header-admin__link(href="#") Вернуться на сайт
    .menu-admin
      .container-admin
        ul.menu-admin__list
          router-link(tag="li" class="menu-admin__item" to="/")
            a.menu-admin__link tab 1
          router-link(tag="li" class="menu-admin__item" to="/blog")
            a.menu-admin__link tab 2
          router-link(tag="li" class="menu-admin__item" to="/works")
            a.menu-admin__link tab 3
          li.menu-admin__item
            a.menu-admin__link tab 4
            
    .page-block
      .container-admin.container-admin_page
        router-view
      .modal
        .modal__text Сообщение отправлено
        button.modal__button.admin-button(type="button") Закрыть
   
 </template>
 


<script>
import admin from "./components/admin";
import adminBlog from "./components/admin";
import adminWorks from "./components/admin";

export default {
  components: {
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
