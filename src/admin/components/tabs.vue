<template lang="pug">
  .menu-admin
    .container-admin
      ul.menu-admin__list
        router-link(tag="li" class="menu-admin__item" exactActiveClass="menu-admin__item_active" to="/")
          a.menu-admin__link(ref="tab") tab 1
        router-link(tag="li" class="menu-admin__item" exactActiveClass="menu-admin__item_active" to="/blog")
          a.menu-admin__link(ref="tab") tab 2
        router-link(tag="li" class="menu-admin__item" exactActiveClass="menu-admin__item_active" to="/works")
          a.menu-admin__link(ref="tab") tab 3
        li.menu-admin__item
          a.menu-admin__link tab 4
  
   
 </template>
 


<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" src="../scss/layout.scss">
</style>
