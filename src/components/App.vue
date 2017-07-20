<template>
  <div class="app-beer-calendar">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './navbar/Navbar.vue';

export default {
  name: 'app',

  components: {
    Navbar
  }
}
</script>
