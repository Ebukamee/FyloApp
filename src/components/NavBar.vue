<template>
  <nav>
    <span><img src="../assets/logo.svg" /></span>
    <router-link to="/login" class="link" v-if="!this.$store.state.isAuthenticated">Sign In</router-link>
    <span  @click="Logout" class="link" v-else>Logout</span>
  </nav>
</template>

<script>
  export default {
    name:'NavBar',
    methods: {
      Logout() {
        this.$store.dispatch('logout')
        .then (() => {
          this.$router.push('/')
        })
      }
    },
  };
</script>