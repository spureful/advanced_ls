<template lang="pug">
.works
  .works__title-block
    h2.works__title.admin-title  Страница «Мои работы»
  form.works__form
    .works__form-cnt
      .works__form-title-block
        h3.works__form-title.admin-subtitle Добавить работу
      input.works__form-input.admin-input(type="text" placeholder="Название проекта")
      input.works__form-input.admin-input(type="text" placeholder="Технологии")
      .works__form-loadimage-block
        button(type="button").works__form-loadimage-btn Загрузить картинку
    .works__form-btn
      button(type="submit").works__form-addbtn.admin-button Добавить
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="scss" scoped src="../scss/works.scss">
</style>
