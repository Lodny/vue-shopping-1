<template>
  <div>
    <OrderModal :showModal="showModal" :order="order" @close="showModal = false" />

    <div class="cart-header">
      {{ headerInfo }}
    </div>
    <div class="cart">
      <ul class="cart-items">
        <CartItem v-for="item in inCart" :key="item._id" :item="item" :itemCount="item.count" />
        <!-- @removeInCart="removeInCart" -->
      </ul>
    </div>
    <!-- <div class="total" v-if="countInCart"> -->
    <div class="total" v-if="inCart.length">
      <div>Total: {{ totalInfo }}</div>
      <v-btn large depressed class="pink white--text" @click="preceedInCart">
        <v-icon left>mdi-cart-check</v-icon>
        <span>Proceed</span>
      </v-btn>
      <!-- <button class="button primary" @click="preceedInCart">
        Proceed
      </button> -->
    </div>
    <div v-if="isProceed">
      <form @submit.prevent="createOrder">
        <ul class="form-container">
          <li>
            <label for="email"><v-icon large left>mdi-email</v-icon>E-mail</label>
            <input id="email" name="email" type="text" v-model="email" required />
          </li>
          <li>
            <label for="name"><v-icon large left>mdi-account</v-icon>Name</label>
            <input id="name" name="name" type="text" v-model="name" required />
          </li>
          <li>
            <label for="address"><v-icon large left>mdi-map-marker</v-icon>Address</label>
            <input id="address" name="address" type="text" v-model="address" required />
          </li>
          <li>
            <!-- <button type="submit" class="button primary"><v-icon large left>mdi-check</v-icon>Checkout</button> -->
            <v-btn large type="submit" class="button primary"><v-icon large left>mdi-check</v-icon>Checkout</v-btn>
          </li>
        </ul>
      </form>
      <v-form>
        <v-text-field label="E-mail" v-model="email" prepend-icon="mdi-email"></v-text-field>
        <v-text-field label="Name" v-model="name" prepend-icon="mdi-account"></v-text-field>
      </v-form>
    </div>
  </div>
</template>

<script>
import CartItem from "./CartItem";
import OrderModal from "./OrderModal";
import { currency } from "@/mixins/currency";
import { mapGetters } from "vuex";

export default {
  components: {
    CartItem,
    OrderModal
  },
  // props: {
  //   inCart: {
  //     type: Array,
  //     require: true
  //   }
  // },
  data() {
    return {
      isProceed: false,
      email: "",
      name: "",
      address: "",
      order: {},
      showModal: false
    };
  },
  computed: {
    ...mapGetters("CART", ["inCart"]),
    // ...mapGetters("CART", ["inCart", "countInCart"]),
    // inCart() {
    //   return this.$store.state.CART.inCart;
    // },
    // countInCart() {
    //   return this.$store.state.CART.inCart.length;
    // },
    headerInfo() {
      // console.log("Cart : computed : headerInfo() : ", this.countInCart);
      // return this.countInCart > 0 ? `You have ${this.countInCart} in the cart` : "Cart is empty!";
      console.log("Cart : computed : headerInfo() : ", this.inCart.length);
      return this.inCart.length > 0 ? `You have ${this.inCart.length} in the cart` : "Cart is empty!";
    },
    totalInfo() {
      const total = this.inCart.reduce((total, item) => (total += item.price * item.count), 0);
      console.log("Cart : computed : totalInfo() : ", total);
      return this.addCurrency(total);
      // return this.formatCurrency(total);
    }
  },
  methods: {
    // removeInCart(removeItem) {
    //   console.log("Cart : methods : removeInCart() : ", removeItem);
    //   this.$emit("removeInCart", removeItem);
    // },
    preceedInCart() {
      console.log("Cart : methods : preceedInCart() : ");
      this.isProceed = true;
    },
    createOrder() {
      console.log("Cart : methods : createOrder() : ");

      this.order = {
        _id: Date.now(),
        email: this.email,
        name: this.name,
        address: this.address,
        total: this.totalInfo,
        createdAt: Date(),
        items: this.inCart
      };
      console.log("Cart : methods : createOrder() : ", this.order.createdAt);
      this.showModal = true;
    }
    // formatCurrency(price) {
    //   return (
    //     "$" +
    //     Number(price)
    //       .toFixed(1)
    //       .toLocaleString() +
    //     " "
    //   );
    // }
  },
  mixins: [currency]
};
</script>

<style scoped>
.cart-header {
  /* display: flex; */
  /* justify-content: space-between; */
  padding: 1rem;
  margin: 1rem;
  border-bottom: 0.1rem #c0c0c0 solid;
}

.cart-items {
  padding: 0;
  width: 100%;
}

.total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.total > div {
  font-size: 2rem;
}

.total > div,
.total > button {
  flex: 1;
}

.button.primary {
  background-color: #f0c040;
}

/* Proceed */
form {
  width: 100%;
  /* border: 1px solid black; */
}

.form-container {
  width: 100%;
  padding: 0;
}

.form-container li {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  list-style-type: none;
}

input {
  padding: 1rem;
  border: 0.1rem #c0c0c0 solid;
}
</style>
