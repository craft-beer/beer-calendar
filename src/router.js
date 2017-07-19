import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/home/Home.vue';
import About from './components/about/About.vue';

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
];

export const router = new VueRouter({
  routes
});
