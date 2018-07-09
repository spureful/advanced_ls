<template lang="pug">
  .about
    .about__title-block 
      h2.about__title.admin-title  Страница «Обо мне»
    form.about__skills#about__skill(@submit.prevent="123")
      adminAbout
      button(type="submit" @click="cons").about__skills-btn.admin-button Сохранить
</template>

<script>
import adminAbout from "./adminAbout";
export default {
  components: {
    adminAbout
  },
  methods: {
    cons() {
      console.log("skill save");
    }
  }
};
</script>


<style lang="scss" scoped src="../scss/admin.scss">
</style>
