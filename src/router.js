import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/home/Home.vue';
import About from './components/about/About.vue';
import Calendar from './components/calendar/Calendar.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/calendar', component: Calendar },
];

const router = new VueRouter({
  routes
});

export default router;
