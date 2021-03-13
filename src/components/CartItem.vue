<template>
  <li class="cart-item">
    <div>
      <img :src="item.image" />
    </div>
    <div>
      <div>{{ item.title }}</div>
      <div class="right">
        {{ priceInfo }}
        <button class="button" @click="removeInCart">Remove</button>
      </div>
    </div>
  </li>
</template>

<script>
import { addCurrency } from "../util";

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
      return `${addCurrency(this.item.price)} x ${this.itemCount}`;
    }
  },
  methods: {
    removeInCart() {
      console.log("CartItem : methods : removeInCart() : ");
      // this.$emit("removeInCart", this.item);
      this.$store.dispatch("CART/removeInCart", this.item);
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
  }
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
