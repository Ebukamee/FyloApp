<template>
  <IsLoading v-if="loading" />
  <div v-else>
    <h2 v-if="!this.$store.state.isAuthenticated">Go back and Login.</h2>
    <main v-else>
      <div class="welcome">
      <p>Welcome back {{ user.username }},What will you buy today?</p>
    </div>
    <div class="cover">
      <h2>Our Top products</h2>
      <div class="product" v-for="(product, i) in paginate" :key="i">
        <img :src="product.thumbnail" :alt="product.title" />
        <h3>{{ product.title }}</h3>
        <p>{{ product.rating }}/5.00 rating</p>
        <p><em>{{ product.discountPercentage }}% discount</em></p>
        <h4>£{{ product.price }}</h4>
        <button class="no" @click="this.$router.push(`/dashboard/${product.id}`)">Details</button>
      </div>
      <div>
        <button :disabled="current == 1" @click="Previous" class="pag">Prev</button>
        <span>{{ current }} of {{ total }}</span>
        <button :disabled="current == 6" @click="Next" class="pag">Next</button>
      </div>
    </div>
    </main>
  </div>
</template>

<script>
import IsLoading from '../components/IsLoading.vue'
const content=5
export default {
  components : {
    IsLoading
  },
  computed: {
    user() {
      return JSON.parse(this.users);
    },
    Auth() {
      return this.$store.state.isAuthenticated
    },
    paginate() {
      const start = (this.current - 1) * content
      const end = start + content
      return this.products.slice(start,end)
    },
    total() {
      return Math.ceil(this.products.length / content)
    }
  },
  name: "DashBoard",
  methods: {
    async onFetch() {
      const res = await fetch("https://dummyjson.com/products");
      const finalres = await res.json();
      this.products = finalres.products;
      this.loading = false
    },
    Next() {
      this.current +=1
    },
    Previous() {
      this.current -= 1
    }
  },
  data() {
    return {
      products: [],
      users:localStorage.getItem('user'),
      current:1,
      loading:true
    };
  },
  mounted() {
    this.onFetch();
    this.$store.state.isAuthenticated = localStorage.getItem('auth');
    document.title='Fylo | Dashboard'
  },
};
</script>
