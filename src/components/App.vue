<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>{{ name }}</p>
    <router-view></router-view>
  </div>
</template>

<script>
const name = '아라레';

export default {
  name: 'app',

  data() {
    return {
      msg: 'Hello World',
      name
    }
  }
}
</script>

<style>
  
</style>
