import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import admin from './components/admin.vue';
import adminBlog from './components/adminBlog.vue';
import adminWorks from './components/adminWorks.vue';

const routes = [
  {
    path: '/',
    component: admin
  },
  {
    path: '/blog',
    component: adminBlog
  },
  {
    path: '/works',
    component: adminWorks
  }
];

export default new VueRouter({ routes, mode: 'history' });