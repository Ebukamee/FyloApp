<script>
export default {
  name: "LogIn",
  data() {
    return {
      isNot: true,
      username: "",
      password: "",
      error:'',
    };
  },
  methods: {
    onchange() {
      this.isNot = !this.isNot;
    },
    login() {
      try {this.$store.dispatch("login", {
        username: this.username,
        password: this.password,
      })
        .then (() => {
          this.$router.push('/dashboard')
        })
      }
      catch(err) {
        this.error=err.message
      }
      console.log(this.username + "" + this.password);
      console.log(this.$store.state);
    },
  },
};
</script>

<template>
  <div id="login">
    <h2>Sign in to your account</h2>
    <form @submit.prevent="login">
      <input
        type="text"
        placeholder="Enter Usename"
        required
        v-model="username"
      />
      <input
        type="Password"
        placeholder="Enter the password"
        v-model="password"
        required
      />
      <button class="button">LogIn</button>
      <p class="err">{{ error }}</p>
    </form>
    <p>Dont have an account? <router-link to="/signup" id="button">Signup</router-link></p>
    <div class="btcontain">
      <button @click="onchange()" class="button">
      {{ isNot ? "Show" : "Hide" }} Login Details
    </button>
    <div v-show="!isNot" class="parse">
      <h3>Login detail</h3>
      <p>
        This is a dummy authenication, therefore only the specified details below
        can be used to login.Although you can do some signup and login with that details.</p>
        <div v-for="(user,i) in this.$store.state.users" :key="i">
          <p><strong>Username: </strong> {{ user.username }}</p>
          <p><strong>Password: </strong> {{ user.password }}</p>
        </div>
    </div>
    </div>
  </div>
</template>
