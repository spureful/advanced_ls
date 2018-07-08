<template lang="pug">
ul.about__skills-list
  li.about__skills-item(v-for="skillItem in skillItems")
    h3.about__skills-title.admin-subtitle {{skillItem.title}}
    .about__skillsform
      ul.about__skillsform-list
        li.about__skillsform-row(v-for="(skillv, skillk) in skillItem.skill")
          .about__skillsform-name {{skillk}}
          input.about__skillsform-input.admin-input(type="text" v-model="skillItem.title.skillv")
      pre {{skillItem.title.skillv}}
</template>

<script>
export default {
  data() {
    return {
      skillItems: [
        {
          title: "Frontend",
          skill: {
            Html: "",
            СSS: "",
            JavaScript: ""
          },
          percents: ["", "", ""],
          category: 1
        },
        {
          title: "Workflow",
          skill: {
            Git: "",
            Gulp: "",
            Bower: ""
          },
          percents: ["", "", ""],
          category: 2
        },
        {
          title: "Backend",
          skill: {
            PHP: "",
            "Node.js": "",
            "Mongo.db": ""
          },
          percents: ["", "", ""],
          category: 3
        }
      ],
      skillpercents: [""]
    };
  }
};
</script>

<style lang="scss" scoped src="../scss/admin.scss">
</style>
