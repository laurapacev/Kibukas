<template>
  <div id="app">
    <navigation></navigation>
    <div class="container">
      <div class="spinner-border load-spinner" role="status"></div>
    </div>
  </div>
</template>

<script>
// Componets
import Navigation from './../components/Navigation.vue'

export default {
  components: { Navigation },
  name: 'App'
}
</script>

<style>
.load-spinner {
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -4em; /* Negative half of height. */
  margin-left: -4em; /* Negative half of width. */
  width: 4rem;
  height: 4rem;
}
</style>
