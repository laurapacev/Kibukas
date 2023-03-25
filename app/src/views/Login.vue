<template>
  <div class="container-login">
    <button v-if="!this.$store.getters.isUserLoggedIn" @click="signInWithGoogle()"  class="sign-in-btn">Sign In</button>
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
    signInWithGoogle()
    {
      signInWithPopup(this.getAuth(), this.getProvider())
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user)
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        router.push({ path: '/', name: 'Home' })
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
    }
  }
}
</script>

<style>
.container-login {
  margin-top: 50px;
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
