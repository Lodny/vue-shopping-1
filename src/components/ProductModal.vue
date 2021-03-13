<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="80%">
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
            <!-- <div>{{ formatCurrency }}</div> -->
            <div>{{ product.price }}</div>
            <button class="button primary" @click="addToCart">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <!-- {{ dialog }} -->
      <!-- <button @click="dialog = false">me</button> -->
      <!-- <template v-slot:activator="{ on, attrs }">
        <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
          Click Me
        </v-btn>
      </template> -->

      <!-- <v-card>
        <v-card-title class="headline grey lighten-2">
          Privacy Policy
        </v-card-title>

        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">
            I accept
          </v-btn>
        </v-card-actions>
      </v-card> -->
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    showModal: {
      type: Boolean,
      required: true
    },
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    dialog: {
      get() {
        return this.showModal;
      },
      set(value) {
        if (!value) {
          this.$emit("close");
        }
      }
    }
  },
  data() {
    return {
      // dialog: false
    };
  },
  methods: {
    addToCart() {
      console.log("Modal : methods : addToCart() ");
      this.dialog = false;
      this.$emit("addToCart");
    }
  }
};
</script>

<style scoped>
.product-details {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-height: 96vh;
  background-color: white;
  padding: 20px;
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
