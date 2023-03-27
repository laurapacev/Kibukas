<template>
  <header>
    <h1>
      Registracija
    </h1>
  </header>


  <div class="container-login">

    <form class="form-container">
      <input type="text" class="form-control" placeholder="Name">
      <button type="submit" class="sign-in-btn">Register</button>


      /* not sure kaip cia dirbtu, + man meta errora be savo pacios additions, todel kol kas taip palieku, nors pagal ideja kaip supratau reikia naudot v-if */
      <input type="text" class="form-control1" placholder="Repeat your password">
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
.form-control {
  height: 50px;
  border-radius: 0px;
  margin-bottom: 20px;
}
.form-control1 {
  height: 60px;
  border-radius: 0px;
  margin-bottom: 20px;
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
