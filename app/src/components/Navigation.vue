<template>
  <nav class="header navbar navbar-dark bg-dark">
    <div class="container d-flex flex-row">
          <a class="navbar-brand" href="#">
            <b>KIBUKAS</b>
          </a>
          <div v-if="this.$store.getters.isUserLoggedIn == false">
            <router-link class="nav-btn" to="/login">Login</router-link>
            <router-link class="nav-btn" to="/register">Register</router-link>
          </div>
          <div v-else>
            <button class="nav-btn" @click="logout()">Logout</button>
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
.nav-btn {
  display: block;
  background: white;
  border: none;
  color: #282c34;
  padding: 4px 10px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  font-size: 1.25rem;
  max-width: 400px;
  margin: 0 auto;
  display: inline-block;
  margin-left: 12px;
}
</style>
