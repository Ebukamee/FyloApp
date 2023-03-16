<script>
export default {
  name: "HomePage",
};
</script>

<template>
  <main class="home">
    <div class="productive">
      <img src="../assets/productive.png" alt="stay-productive"  />
    </div>
    <div class="contain">
      <h1>
      Discover <span>Great </span>products with the <span>Best </span> prices
    </h1>
    <p>
      At Fylo stores, we offer a wide variety of goods and
      services and for the best price available. You can now get all of our
      affordable product without leaving the comfort of your beautiful home by
      shopping with us online.
    </p>
    <button> <router-link to="/signup" id="button">Shop Now </router-link></button>
    </div>
  </main>
</template>
