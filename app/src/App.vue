<template>
  <div id="app">
    <navigation></navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';

export default {
  components: { Navigation },
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style>
html, body {
  height: 100%;
  width: 100%;
}
</style>
