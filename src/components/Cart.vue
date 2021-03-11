<template>
  <div>
    <div class="cart-header">
      Cart is empty!
    </div>
    <div cladd="cart-items">
      <CartItem />
    </div>
  </div>
</template>

<script>
import CartItem from "./CartItem";

export default {
  components: {
    CartItem
  }
};
</script>

<style scoped>
.cart-header {
  display: flex;
  /* justify-content: space-between; */
  padding: 1rem;
  margin: 1rem;
  border-bottom: 0.1rem #c0c0c0 solid;
}

.cart-items {
  padding: 0;
  width: 100%;
  list-style-type: none;
}

.cart-items img {
  width: 5rem;
}

.cart-items li {
  display: flex;
}

.cart-items li div {
  padding: 0.5rem;
}

.cart-items li div:last-child {
  flex: 1;
}

.right {
  text-align: right;
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
</style>
