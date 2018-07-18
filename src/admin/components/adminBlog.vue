<template lang="pug">
.blog
  .blog__title-block
    h2.blog__title.admin-title Страница «Блог»
  form.blog__form#blog__form(@submit.prevent="123")
    .blog__form-title-block
      h3.blog__form-title.admin-subtitle Добавить запись
    input.blog__form-input.admin-input(type="text" placeholder="название" v-model="article.title")
    input.blog__form-input.admin-input(type="text" placeholder="дата" v-model="article.date")
    textarea.admin-input.blog__form-texarea(type="text" placeholder="содержание" v-model="article.content")
    button(type="submit" @click="addArticle").blog__form-btn.admin-button добавить

</template>


<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      article: {
        title: "",
        date: "",
        content: ""
      }
    };
  },
  methods: {
    ...mapActions(["loadArticle"]),
    addArticle() {
      const jsonObject = JSON.stringify(this.article);
      this.loadArticle(jsonObject);
      console.log(jsonObject);
    }
  }
};
</script>

<style lang="scss" scoped src="../scss/blog.scss">
</style>
