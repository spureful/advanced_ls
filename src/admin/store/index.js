import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import blog from "./modules/blog"

export const store = new Vuex.Store({
  modules: {
    blog
  }
});