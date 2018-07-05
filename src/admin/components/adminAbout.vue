<template lang="pug">
ul.about__skills-list
  li.about__skills-item(v-for="skillItem in skillItems")
    h3.about__skills-title.admin-subtitle {{skillItem.title}}
    .about__skillsform
      ul.about__skillsform-list
        li.about__skillsform-row(v-for="skill in skillItem.skill")
          .about__skillsform-name {{skill}}
          input.about__skillsform-input.admin-input(type="text")
  

</template>

<script>
export default {
  data() {
    return {
      skillItems: [
        {
          title: "Frontend",
          skill: ["Html", "СSS", "JavaScript"]
        },
        {
          title: "Workflow",
          skill: ["Git", "Gulp", "Bower"]
        },
        {
          title: "Backend",
          skill: ["PHP", "Node.js", "Mongo.db"]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped src="../scss/admin.scss">
</style>
