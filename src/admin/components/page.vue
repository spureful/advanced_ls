<template lang="pug">
  div
    h2 начинаем знакомиться!
    h1 {{username}} {{intitle}}
    h1 {{form}}
    input(type="text" v-model="username")
    button(v-bind="$attrs" v-on="$listeners") push me!
    input(type="checkbox" v-model="form.check" value="yes")
    span yes
    input(type="checkbox" v-model="form.check" value="no")
    span no
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    intitle: {
      type: String,
      default: "123"
    }
  },
  data() {
    return {
      docn: "123",
      username: "",
      form: {
        check: [],
        rad: ""
      }
    };
  }
};
</script>
