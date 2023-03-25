<template>
  <div id="app">
    <navigation></navigation>
    <div class="container">

      <router-view></router-view>

    </div>
  </div>
</template>

<script>
// Componets
import Navigation from './components/Navigation.vue'

export default {
  components: { Navigation },
  name: 'App'
}
</script>

<style>
html, body {
  height: 100%;
  width: 100%;
  background-color: rgb(40, 37, 53);
  color: #ffffff;
}
</style>
