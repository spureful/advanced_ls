<template lang="pug">
.about
 .about__title-block
   h2.about__title.admin-title  Страница «Обо мне»
 form.about__skills#about__skill(@submit.prevent="123")
   adminAbout(
	 v-for="type in types"
     :key="type.name"
     :type="type"
     :skills="skills"
   )
 button(type="submit" @click="cons").about__skills-btn.admin-button Сохранить
</template>

<script>
import adminAbout from "./adminAbout";
export default {
  components: {
    adminAbout
  },
  data() {
    return {
      types: [
        { id: 0, name: "frontend" },
        { id: 1, name: "backend" },
        { id: 2, name: "workflow" }
      ]
    };
  }
};
</script>


<style lang="scss" scoped src="../scss/admin.scss">
</style>
