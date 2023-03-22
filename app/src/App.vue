<template>
  <div id="app">
    <navigation></navigation>
    <div class="container">
      <!-- <router-view></router-view> -->
      <button v-if="!isUserLoggedIn()" @click="signInWithGoogle()">Sign In</button>
      <button @click="test()">test</button>
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
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

const userTest = auth.currentUser;

export default {
  components: { Navigation },
  name: 'App',
  data() {
    return {
      user: []
    }
  },
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
    async fetchUserSession()
    {
      await auth.onAuthStateChanged((user) => {
        if (user)
           this.user = user
      });
    },
    isUserLoggedIn()
    {
      if(this.user.length == 0)
        return false
      return true
    },
    test()
    {
      console.log(this.user)
      console.log(this.isUserLoggedIn())
    }
  },
  async created()
  {
    this.fetchUserSession()
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
</style>
