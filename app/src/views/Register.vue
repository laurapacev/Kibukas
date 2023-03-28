<template>
  <div>
    <header>
      <h1>
        Registracija
      </h1>
    </header>
    <div class="container-login">
      <form class="form-container" @submit.prevent="register">
        <input type="text" class="form-control" placeholder="Name">
        <input v-bind:type="showPassword ? 'text' : 'password'" class="form-control" placeholder="Password">
        <input v-bind:type="showPassword ? 'text' : 'password'" class="form-control" placeholder="Repeat Password">
        <button type="button" class="toggle-password-btn" @click="showPassword = !showPassword">{{ showPassword ? 'Hide' : 'Show' }} Password</button>
        <button type="submit" class="sign-in-btn">Register</button>
        <!-- <button type="button" class="toggle-password-btn" @click="showPassword = !showPassword">{{ showPassword ? 'Hide' : 'Show' }} Password</button> -->
        <!-- <button type="submit" class="sign-in-btn" v-if="!showPassword" @click.prevent="showPassword = true">Enter Password</button> -->
        <!-- <button type="submit" class="sign-in-btn" v-if="showPassword">Register?</button> -->
      </form>
    </div>
  </div>
</template>

<!--  -->
<script>
export default {
  data() {
    return {
      showPassword: false
    }
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
      console.log('Password visibility toggled');
    }
  }
}
</script>
<!--  -->
<script>
export default {
  data() {
    return {
      password: '',
      repeatPassword: '',
      showPassword: false
    }
  },
  methods: {
    register() {
      if (this.password === this.repeatPassword) {
        // passwords match, continue with registration logic
      } else {
        this.errorMessage = 'Passwords do not match.';
        // passwords don't match, show error message or take other action
      }
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
</style>
