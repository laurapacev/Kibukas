<template>
  <nav class="header navbar navbar-dark bg-dark">
    <div class="container d-flex flex-row">
          <a class="navbar-brand" href="#">
            <b>KIBUKAS</b>
          </a>
          <button v-show="this.$store.getters.isUserLoggedIn == true" @click="logout()">Logout</button>
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
      this.getAuth().signOut().then(() => {
        this.$store.commit('logoutUser')
        this.$router.push('/login')
      }).catch((error) => {
        // An error happened.
      });
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
