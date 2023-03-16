<script>
export default {
  name: "SignUp",
  data() {
    return {
      isNot: true,
      username: "",
      password: "",
      confirm:'',
      error:'',
      error2:''
    };
  },
  methods: {
    Signup() {
        if(this.password.length >= 7  && this.password==this.confirm) {
            const user ={
            username:this.username,
            password:this.password
        }
        this.error=''
        this.error2=""
        this.$store.dispatch('signup',user)
          .then (() => {
            alert('Account created successfully. Navigate back to signup page to access your account')
          })
        }
        else if(this.password.length>7) {
            this.error2='The password must contain atleast seven characters'
        }
        else  {
            this.error='Passwords are not corresponding'
        }
    }
  },
};
</script>

<template>
  <div id="Signup">
    <h2>Create Account</h2>
    <form @submit.prevent="Signup">
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
      <p class="err">{{ error2 }}</p>
      <input
        type="Password"
        placeholder="Confirm password"
        v-model="confirm"
        required
      />
      <button class="button">Create Account</button>
      <p class="err">{{ error }}</p>
    </form>
    <p>Already registered? <router-link to="/login" id="button">Login</router-link></p>
  </div>
</template>
