<template lang="pug">
  .about
    .about__title-block 
      h2.about__title.admin-title  Страница «Обо мне»
    form.about__skills
      adminAbout
      button(type="submit").about__skills-btn.admin-button Сохранить
</template>

<script>
import adminAbout from "./adminAbout";
export default {
  components: {
    adminAbout
  }
};
</script>


<style lang="scss" scoped src="../scss/admin.scss">
</style>
