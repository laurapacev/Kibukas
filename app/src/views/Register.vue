<template>
  <div class="container-login">
    <form class="form-container">
      <h1 class="reg-heading">REGISTRATION</h1>
      <alert v-if="getAlertShow() == true" :type="getAlertType()">{{ getAlertMsg() }}</alert>
      <input type="text" class="form-control" placeholder="Name" v-model="name">
      <input type="text" class="form-control" placeholder="Email"  v-model="email">
      <div class="password-container">
        <input type="password" class="form-control" :type="passwordFieldType" placeholder="Password"  v-model="password">
        <input type="password" class="form-control" :type="passwordFieldType" placeholder="Repeat password"  v-model="re_password">
        <label>
          <input type="checkbox" v-model="showPassword" @change="togglePasswordVisibility()"> Show password
        </label>
      </div>
      <input type="button" class="button" @click="this.register" value="Register">
    </form>
  </div>
</template>

<script>
// Componets
import Alert from '../components/Alert.vue'

// Mixins
import { AlertMixin } from '../mixins/AlertMixin'
import { Firebase } from '../mixins/Firebase'
import { createUserWithEmailAndPassword  } from "firebase/auth";

export default {
  components: { Alert },
  mixins: [ AlertMixin, Firebase ],
  data() {
    return {
      name: null,
      email: null,
      password: null,
      re_password: null,
      showPassword: false,
    }
  },
  computed: {
    passwordFieldType() {
      return this.showPassword ? 'text' : 'password';
    },
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
  },
  methods: {
    register()
    {
      if(!this.checkInput())
      {
        return
      }

      if(!this.doesPasswordsMatch())
      {
        this.showAlert(true, "Passwords don't match", 'warning')
        return
      }

      if(!this.createAccount(this.email, this.password)) return false

      this.showAlert(true, 'Registration was successful', 'success')
    },
    checkInput()
    {
      if(this.name == null || this.name == "")
      {
        this.showAlert(true, 'Empty name field', 'warning')
        return false
      }

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

      if(this.re_password == null || this.re_password == "")
      {
        this.showAlert(true, 'Empty repeat password field', 'warning')
        return false
      }

      return true

    },
    doesPasswordsMatch()
    {
      if(this.password == this.re_password)
        return true
      return false
    },
    createAccount(email, password)
    {
      createUserWithEmailAndPassword(this.getAuth(), email, password)
      .then(async (userCredential) => {
        console.log(userCredential)
        this.addUserToFirebaseCollection(userCredential.user.uid, userCredential.user.email)
        router.push({ path: '/', name: 'Home' })
        return true
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.showAlert(true, errorMessage, 'error')
        // ..
        return false
      });
    },
    addUserToFirebaseCollection(u_id, e_mail)
    {
      this.setDocument("users", {
        uid: u_id,
        email: e_mail
      }, u_id) 
    }
  }
}
</script>


<style>
.container-login {
  margin-top: 50px;
}

.error-message {
  color: red;
  margin-top: 10px;
}

.reg-heading {
  text-align: center;
  margin-bottom: 60px;
}
</style>
