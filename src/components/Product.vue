<template>
  <div class="product">
    <a :href="formatHref">
      <img :src="product.image" />
      <p>{{ product.title }}</p>
    </a>
    <div class="product-price">
      <div>{{ formatCurrency }}</div>
      <button class="button primary" @click="addToCart(product)">Add to Cart</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    formatHref() {
      return "#" + this.product._id;
    },
    formatCurrency() {
      return (
        "$" +
        Number(this.product.price)
          .toFixed(1)
          .toLocaleString() +
        " "
      );
    },
  },
  methods: {
    addToCart(product) {
      console.log("Product : methods : addToCart() : ", product);
      this.$emit("addToCart", product);
    },
  },
};
</script>

<style>
.product {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.product img {
  max-width: 37rem;
  max-height: 37rem;
}

.product-price {
  display: flex;
  justify-content: center;
  align-items: center;
}

.product-price div,
.product-price button {
  text-align: center;
  flex: 1;
}

.product-price div {
  font-size: 2rem;
}

.button {
  padding: 1rem;
  border: 0.1rem #c0c0c0 solid;
  background-color: #f0f0f0;
  cursor: pointer;
}

.button:hover {
  border: 0.1rem #808080 solid;
}

.button.primary {
  background-color: #f0c040;
}

a {
  text-decoration: none;
}
</style>
