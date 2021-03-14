<template>
  <li class="cart-item">
    <div>
      <img :src="item.image" />
    </div>
    <div>
      <div>{{ item.title }}</div>
      <div class="right">
        {{ priceInfo }}
        <v-btn class="blue white--text" @click="removeInCart(item)">
          <v-icon left>mdi-cart-off</v-icon>
          <span>Remove</span>
        </v-btn>
        <!-- <button class="button" @click="removeInCart(item)">Remove</button> -->
      </div>
    </div>
  </li>
</template>

<script>
import { mapActions } from "vuex";
import { currency } from "@/mixins/currency";

export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    // for reredering
    itemCount: {
      type: Number,
      required: true
    }
  },
  computed: {
    priceInfo() {
      console.log("CartItem : computed : priceInfo() : ", this.item.count);
      // return `${this.item.price} x ${this.item.count}`;
      // return `${addCurrency(this.item.price)} x ${this.item.count}`;
      return `${this.addCurrency(this.item.price)} x ${this.itemCount}`;
    }
  },
  methods: {
    ...mapActions("CART", ["removeInCart"])
    // removeInCart() {
    //   console.log("CartItem : methods : removeInCart() : ");
    //   // this.$emit("removeInCart", this.item);
    //   this.$store.dispatch("CART/removeInCart", this.item);
    // }
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
.cart-item {
  display: flex;
  /* border: solid 1px black; */
}

li {
  /* display: flex; */
  list-style-type: none;
}

.cart-item img {
  width: 5rem;
}

.cart-item div {
  padding: 0.5rem;
}

.cart-item div:last-child {
  flex: 1;
}

.right {
  text-align: right;
}
</style>
