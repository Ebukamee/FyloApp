<template>
  <IsLoading v-if="loading" />
  <main v-else>
    <h2 v-if="!this.$store.state.isAuthenticated">Go back and Login.</h2>
    <div class="list" v-else>
    <h2>{{ product.title }}</h2>
    <span v-for="(images, i) in product.images" :key="i">
      <img :src="images" alt="product image" class="image" />
    </span>
    <h3><strong>Category:</strong>{{ product.category }}</h3>
    <p><strong>Description: </strong>{{ product.description }}</p>
    <button @click="Click" class="no">Add to cart</button>
  </div>
  </main>
</template>

<script>
import IsLoading from "../components/IsLoading.vue";
export default {
  components: {
    IsLoading,
  },
  data() {
    return {
      product: {},
      loading: true,
      // id:this.$route.params
    };
  },
  methods: {
    async onFetch() {
      const { id } = this.$route.params;
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const finalres = await res.json();
      this.product = finalres;
      this.loading = false;
    },
    Click() {
      alert(`${this.product.title} have been added to cart`);
    },
  },
  mounted() {
    this.onFetch();
    document.title = "Product Dispaly";
  },
};
</script>
