<template>
  <ul class="products">
    <li v-for="product in products" :key="product._id">
      <Product :product="product" @addToCart="addToCart" />
    </li>
  </ul>
</template>

<script>
import Product from "./Product";

export default {
  components: {
    Product,
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    addToCart(product) {
      console.log("Products : methods : addToCart() : ", product);
      this.$emit("addToCart", product);
    },
  },
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
