<template>
  <div class="container-login">

    <form class="form-container">
      <h1 class="reg-heading">REGISTRATION</h1>
      <div v-if="isAlertSet() == true && this.success == false" class="alert alert-warning" role="alert">{{ alert }}</div>

      <div v-if="this.success == true" class="alert alert-success" role="alert">{{ alert }}</div>


      <input type="text" class="form-control" placeholder="Name" v-model="name">
      <input type="text" class="form-control" placeholder="Email"  v-model="email">
      <input type="password" class="form-control" placeholder="Password"  v-model="password">
      <input type="password" class="form-control" placeholder="Repeat password"  v-model="re_password">
      <input type="button" class="sign-in-btn" @click="this.register" value="Register">
    </form>
  </div>
</template>

<script>
// Mixins
import { Firebase } from '../mixins/Firebase'

export default {
  mixins: [ Firebase ],
  data() {
    return {
      name: null,
      email: null,
      password: null,
      re_password: null,
      alert: null,

      success: false
    }
  },
  methods: {
    isAlertSet()
    {
      if(this.alert == null)
        return false
      return true
    },
    register()
    {
      if(!this.checkInput())
      {
        this.success = false
        return
      }

      if(!this.doesPasswordsMatch())
      {
        this.alert = "Passwords don't match"
        this.success = false
        return
      }

      this.alert = 'Registration data was successfully supplied'
      this.success = true
    }
    ,
    checkInput()
    {
      this.success = false
      if(this.name == null || this.name == "")
      {
        this.alert = 'Empty name field'
        return false
      }


      if(this.email == null || this.email == "")
      {
        this.alert = 'Empty email field'
        return false
      }

      if(this.password == null || this.password == "")
      {
        this.alert = 'Empty password field'
        return false
      }

      if(this.re_password == null || this.re_password == "")
      {
        this.alert = 'Empty repeat password field'
        return false
      } 

      this.success = true

      return true

    },
    doesPasswordsMatch()
    {
      if(this.password == this.re_password)
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
.form-container {
  margin: 0 auto;
  width: 400px;
}
.error-message {
    color: red;
    margin-top: 10px;
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
  margin: 50px auto;
}
.reg-heading {
  text-align: center;
  margin-bottom: 60px;
}
</style>
