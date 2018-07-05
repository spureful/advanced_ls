<template lang="pug">
.blog
  .blog__title-block
    h2.blog__title.admin-title Страница «Блог»
  form.blog__form
    .blog__form-title-block
      h3.blog__form-title.admin-subtitle Добавить запись
    input.blog__form-input.admin-input(type="text" placeholder="название")
    input.blog__form-input.admin-input(type="text" placeholder="дата")
    textarea.admin-input.blog__form-texarea(type="text" placeholder="содержание")
    button(type="submit").blog__form-btn.admin-button добавить
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="scss" scoped src="../scss/blog.scss">
</style>
