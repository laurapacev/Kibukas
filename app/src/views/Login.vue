<template>
  <div class="container-login">
    <form class="form-container">
      <h1 class="reg-heading">LOGIN</h1>

      <alert v-if="getAlertShow() == true" :type="getAlertType()">{{ getAlertMsg() }}</alert>

      <input type="text" class="form-control" placeholder="Email" v-model="email">
      <div class="password-wrapper">
        <input type="password" class="form-control" placeholder="Password" v-model="password" :type="showPassword ? 'text' : 'password'">
        <input type="checkbox" class="show-password-checkbox" v-model="showPassword"> Show Password
      </div>
      <input type="button" class="button" @click="login()" value="Login">

      <span class="hr-span">OR LOGIN WITH</span>
      <hr class="hr-style"/>

      <input @click="signInWithGoogle()" type="button" class="button" value="Google Auth Login">
    </form>
  </div>
</template>

<script>
import router from "@/routes";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
<<<<<<< HEAD
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
=======
>>>>>>> 92e1b338743c778c6b551b90281560996fabe5ac
import { getDatabase, set, ref, update } from "firebase/database";

//Initialize firebase
const auth = getAuth();
const database = getDatabase();
// Componets
import Alert from '../components/Alert.vue'

// Mixins
import { AlertMixin } from '../mixins/AlertMixin'
import { Firebase } from '../mixins/Firebase'


export default {
  components: { Alert },
  mixins: [ AlertMixin, Firebase ],
  data() {
    return {
      email: null,
      password: null,
      showPassword: false // add a new data property for show password
    }
  },
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
    },
    login()
    {
      if(!this.checkInput())
      {
        return
      }
      signInWithEmailAndPassword(auth, email, password) .then((userCredential) => {
      const user = userCredential.user;
      const dt = new Date();
      update(ref(database, 'users/' + user.uid),{
        last_login:dt,
        email:email
      })
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
      this.showAlert(true, 'Login data was successfully supplied', 'success')
    },
    checkInput()
    {
      if(this.email == null || this.email == "")
      {
        this.showAlert(true, 'Empty email field', 'warning')
        return false
      }

      if(this.password == null || this.password == "")
      {
        this.showAlert(true, 'Empty password field', 'warning')
        return false
      }

      return true
    }
  }
}
</script>

<style>
.container-login {
  margin-top: 50px;
}
.hr-span {
  text-align: center;
  display: block;
  font-size: 13px;
  position: relative;
  top: 25px;
}
.hr-style {
  margin-bottom: 35px;
}
</style>
