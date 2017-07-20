<template>
  <div class="app-beer-calendar">
    <navbar></navbar>
    <router-view></router-view>
    <foot></foot>
  </div>
</template>

<script>
import Navbar from './navbar/Navbar.vue';
import Foot from './foot/Foot.vue';

export default {
  name: 'app',

  components: {
    Navbar,
    Foot
  }
}
</script>
