<template lang="pug">
.works
  .works__title-block
    h2.works__title.admin-title  Страница «Мои работы»
  form.works__form(@submit.prevent="123")
    .works__form-cnt
      .works__form-title-block
        h3.works__form-title.admin-subtitle Добавить работу
      input.works__form-input.admin-input(type="text" placeholder="Название проекта"  v-model="work.title")
      input.works__form-input.admin-input(type="text" placeholder="Технологии"  v-model="work.techs")
      input.works__form-input.admin-input(type="text" placeholder="Ссылка"  v-model="work.link")
      .works__form-loadimage-block
        input(type="file" @change="addPhoto").works__form-loadimage 
        .works__form-loadimage-custom Загрузить картинку
    .works__form-btn
      button(type="submit" @click="addWork").works__form-addbtn.admin-button Добавить
</template>

<script>
import { mapActions } from "vuex";
export default {
  components: {},
  data() {
    return {
      work: {
        title: "",
        techs: "",
        link: "",
        photo: ""
      }
    };
  },
  methods: {
    ...mapActions(["addNewWork"]),
    addPhoto(e) {
      const files = e.target.files;
      if (files.length == 0) return;
      this.work.photo = files[0];
    },
    addWork() {
      const formData = new FormData();
      Object.keys(this.work).forEach(prop => {
        formData.append(prop, this.work[prop]);
      });
      this.addNewWork(formData);
    }
  }
};
</script>

<style lang="scss" scoped src="../scss/works.scss">
</style>
