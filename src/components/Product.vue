<template>
  <!-- <Modal v-if="showModal" @close-modal="showModal = false">
    <div class="product-details">
      <img :src="product.image" :alt="product.title" />
      <div class="product-details-description">
        <p>
          <strong>{{ product.title }}</strong>
        </p>
        <p>{{ product.description }}</p>
        <p>
          Available Sizes
          <span v-for="size in product.availableSizes" :key="size">
            {{ " " }}
            <button class="button">{{ size }}</button>
          </span>
        </p>
        <div class="product-price">
          <div>{{ formatCurrency }}</div>
          <button class="button primary" @click="addToCart">
            Add to Cart
          </button>
        </div>
      </div> 
    </div>
  </Modal> -->
  <div>
    <ProductModal :showModal="showModal" :product="product" @close="showModal = false" />
    <!-- <ProductModal :showModal="showModal" :product="product" @close="showModal = false" @addToCart="addToCart" /> -->

    <div class="product">
      <a :href="formatHref" @click="modalProduct">
        <img :src="product.image" />
        <p>{{ product.title }}</p>
      </a>
      <div class="product-price">
        <!-- <div>{{ formatCurrency(product.price) }}</div> -->
        <div>{{ formatCurrency }}</div>
        <button class="button primary" @click="addToCart">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import ProductModal from "./ProductModal";
import { addCurrency } from "../util";

export default {
  components: { ProductModal },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showModal: false
    };
  },
  computed: {
    formatHref() {
      return "#" + this.product._id;
    },
    formatCurrency() {
      return addCurrency(this.product.price);
    },
    sizeInfo() {
      return `Available Sizes [${this.product.availableSizes.map(size => "  " + size + " ")}]`;
    }
  },
  methods: {
    addToCart() {
      console.log("Product : methods : addToCart() : ");
      this.$store.dispatch("CART/addToCart", this.product);
      // this.$emit("addToCart", this.product);
    },
    modalProduct() {
      console.log("Product : methods : modalProduct() : ");
      this.showModal = true;
    }
  }
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

/* Product Details */
.product-details {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-height: 96vh;
}

.product-details img {
  max-height: 100vh;
  max-width: 45rem;
  margin: 0 auto;
}

.product-details-description {
  flex: 1 1;
  margin: 1rem;
}

.close-modal {
  position: absolute;
  right: 1rem;
  top: 2.5rem;
  z-index: 1000;
}
</style>
