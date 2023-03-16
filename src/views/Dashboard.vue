<template>
  <div>
    <div class="welcome">
      <p>Welcome back {{ user.username }},What will you buy today?</p>
    </div>
    <div class="cover">
      <h2>Our Top products</h2>
      <div class="product" v-for="(product, i) in products" :key="i">
        <img :src="product.thumbnail" :alt="product.title" />
        <h3>{{ product.title }}</h3>
        <p>{{ product.rating }}/5.00 rating</p>
        <p><em>{{ product.discountPercentage }}% discount</em></p>
        <h4>£{{ product.price }}</h4>
        <button class="no" @click="Click(product)">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return JSON.parse(this.users);
    },
    Auth() {
      return this.$store.state.isAuthenticated
    }
  },
  name: "DashBoard",
  methods: {
    // onGet() {
    //     return localStorage.setItem(this.$store.state.user);
    // }
    async onFetch() {
      // fetch('https://dummyjson.com/products')
      //   .then((res) => res.json())
      //   .then((data) => this.products=data.products)
      // .then(() => console.log(this.products.title))
      const res = await fetch("https://dummyjson.com/products");
      const finalres = await res.json();
      this.products = finalres.products;
      console.log(this.products);
    },
    Click(product) {
      alert(`${product.title} has been added to cart`)
    }
  },
  data() {
    return {
      products: [],
      users:localStorage.getItem('user'),
      // auth:localStorage.getItem('auth')
    };
  },
  mounted() {
    // localStorage.getItem=this.$store.state.user
    this.onFetch();
    // alert(localStorage.getItem('user'))
    // const user = localStorage.getItem('user')
    // const auth= localStorage.getItem('auth')
    this.$store.state.isAuthenticated = localStorage.getItem('auth');
    console.log(this.$store.state.users)
  },
};
</script>
