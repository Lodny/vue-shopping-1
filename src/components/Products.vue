<template>
  <ul class="products">
    <li v-for="product in products" :key="product._id">
      <Product :product="product" />
      <!-- <Product :product="product" @addToCart="addToCart" @modalProduct="modalProduct" /> -->
    </li>
  </ul>
</template>

<script>
import Product from "./Product";

export default {
  components: {
    Product
  },
  // props: {
  //   products: {
  //     type: Array,
  //     required: true
  //   }
  // },
  // data() {
  //   return {};
  // },
  computed: {
    products() {
      return this.$store.state.PRODUCTS.filtered;
    }
  },
  methods: {
    // addToCart(product) {
    //   console.log("Products : methods : addToCart() : ", product);
    //   this.$emit("addToCart", product);
    // },
    // modalProduct(product) {
    //   console.log("Products : methods : modalProduct() : ", product);
    //   this.$emit("modalProduct", product);
    // }
  }
};
</script>

<style scoped>
.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style-type: none;
}

.products li {
  flex: 0 1 29rem;
  height: 47rem;
  padding: 1rem;
  /* margin: 1rem; */
}
</style>
