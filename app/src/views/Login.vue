<template>
  <div class="container-login">
    <button v-if="!this.$store.getters.isUserLoggedIn" @click="signInWithGoogle()"  class="sign-in">Sign In</button>
    <button @click="test()">test</button>
  </div>
</template>

<script>
// Firebase
import router from "@/routes";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAD1WEV3K283NKoCXsRxaBk--KV9piKpCc",
  authDomain: "kibukas-68495.firebaseapp.com",
  projectId: "kibukas-68495",
  storageBucket: "kibukas-68495.appspot.com",
  messagingSenderId: "718635856365",
  appId: "1:718635856365:web:1e462bc10bf8fcd19277e4",
  measurementId: "G-H087EJPNHJ"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export default {
  methods: {
    signInWithGoogle()
    {
      signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user)
        // IdP data available using getAdditionalUserInfo(result)
        // ...
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
    },
    created()
    {
      console.log("login")
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
