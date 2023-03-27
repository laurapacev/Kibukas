<template>
  <div class="container-login">

    <form class="form-container">
      <button type="submit" class="sign-in-btn">Register</button>
    </form>

  </div>
</template>

<script>
import router from "@/routes";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Mixins
import { Firebase } from '../mixins/Firebase'

export default {
  mixins: [ Firebase ],
  methods: {

  }
}
</script>

<style>
.container-login {
  margin-top: 50px;
}
.form-container {
  margin: 0 auto;
  width: 400px;
}
.sign-in-btn {
  display: block;
  background: white;
  border: none;
  color: #282c34;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  font-size: 1.25rem;
  max-width: 400px;
  margin: 0 auto;
}
</style>
