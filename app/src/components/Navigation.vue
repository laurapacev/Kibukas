<template>
  <nav class="header navbar navbar-dark bg-dark">
    <div class="container d-flex flex-row">
        <div class="">
          <a class="navbar-brand" href="#">
            <b>KIBUKAS</b>
          </a>
        </div>
        <div class="">
          <button v-if="this.$store.getters.isUserLoggedIn" @click="logout()">Logout</button>
        </div>
    </div>
  </nav>
</template>

<script>
// Mixins
import { Firebase } from '../mixins/Firebase'

export default {
  mixins: [ Firebase ],
  methods: {
    logout() {
      console.log(this.getAuth().signOut())
    }
  }
}
</script>

<style>
.header {
  background-color: rgba(24, 23, 23, 1) !important;
  color: #ffffff !important;
}
</style>
