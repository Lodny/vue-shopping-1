<template>
  <ul class="products">
    <li v-for="product in products" :key="product._id">
      <Product :product="product" />
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
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
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
