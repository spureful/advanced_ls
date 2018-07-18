<template lang="pug">

li.about__skillsform-row
  .about__skillsform-name {{skill.title}}
  input.about__skillsform-input.admin-input(type="text"  v-model="newSkill.percents")
      
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  props: {
    editmode: {
      type: Boolean,
      default: false
    },
    skill: {
      type: Object,
      default: () => {}
    },
    typeId: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      newSkill: {
        title: "",
        percents: "",
        category: this.typeId
      }
    };
  },
  computed: {
    ...mapGetters(["userId"])
  }
};
</script>

<style lang="scss" scoped src="../scss/admin.scss">
</style>
