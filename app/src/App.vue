<template>
  <div id="app">
    <navigation></navigation>
    <div class="container">

      <router-view v-if="apiLoaded == true"></router-view>
      <div v-else class="spinner-border load-spinner" role="status"></div>

    </div>
  </div>
</template>

<script>
// Stores
// Componets
import Navigation from './components/Navigation.vue'

export default {
  components: { Navigation },
  name: 'App',
  data() {
    return {
      apiLoaded: false
    }
  },
  computed: {
    getApiLoadChange() {
      return this. $store.state.user.apiState
    }
  },
  watch: {
    getApiLoadChange(newState, oldState) {
      if(newState == 1)
      {
        this.apiLoaded = true
      }
    }
  }
}
</script>

<style>
html, body {
  height: 100%;
  width: 100%;
  background-color: rgb(40, 37, 53);
  color: #ffffff;
}
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
