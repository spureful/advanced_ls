<template lang="pug">
.blog
  .blog__title-block
    h2.blog__title.admin-title Страница «Блог»
  form.blog__form#blog__form(@submit.prevent="loadNewArticle")
    .blog__form-title-block
      h3.blog__form-title.admin-subtitle Добавить запись
    input.blog__form-input.admin-input(type="text" placeholder="название" v-model="article.title")
    input.blog__form-input.admin-input(type="text" placeholder="дата" v-model="article.date")
    textarea.admin-input.blog__form-texarea(type="text" placeholder="содержание" v-model="article.content")
    button(type="submit").blog__form-btn.admin-button добавить

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
    loadNewArticle() {
      console.log(this.article);
      fetch(
        "http://webdev-api.loftschool.com/posts?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6Ly93ZWJkZXYtYXBpLmxvZnRzY2hvb2wuY29tL2xvZ2luIiwiaWF0IjoxNTMxMDM5MTI3LCJleHAiOjE1MzEwNTcxMjcsIm5iZiI6MTUzMTAzOTEyNywianRpIjoibjE4Y2w4RG9QQjdlWlM3NiJ9.LQ2ONuOGB-UJvvLKgR8CoJvKFiIVeDMREGR0wwhvkxQ",
        {
          method: "POST",
          body: this.article
        }
      )
        .then(resp => resp.json())
        .then(resp => {
          if (respObj.resultCode !== "OK") {
            throw new Error();
          }
          return resp;
        });
    }
  }
};
</script>

<style lang="scss" scoped src="../scss/blog.scss">
</style>
