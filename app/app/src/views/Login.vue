<template>
  <div class="container-login">
    <button v-if="!isUserLoggedIn()" class="sign-in">Prisijungti su Google paskyra</button>
    <p v-else>Prisijungta</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: []
    }
  },
  methods: {
    isUserLoggedIn() {
      if (this.user.length > 0 )
        return true
      return false
    }
  }
}
</script>

<style>
.container-login {
  margin-top: 50px;
}
.sign-in {
  display: block;
  color: #282c34;
  background: white;
  max-width: 400px;
  margin: 0 auto;
}
button {
  background-color: #282c34;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  font-size: 1.25rem;
}
</style>
