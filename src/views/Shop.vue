<template>
  <div class="shop grid-container">
    <header>
      <a href="/">Vue Shopping Cart</a>
    </header>
    <main>
      <div class="content">
        <div class="main">
          <Filters :productsCount="productsCount" @changeOrder="changeOrder" @changeSize="changeSize" />
          <Products :products="filtered" />
        </div>
        <div class="sidebar">
          <Cart />
        </div>
      </div>
    </main>
    <footer>All right is reserved.</footer>
  </div>
</template>

<script>
import Filters from "@/components/Filters";
import Products from "@/components/Products";
import Cart from "@/components/Cart";
import data from "../../data.json";

export default {
  components: {
    Filters,
    Products,
    Cart
  },
  data() {
    return {
      products: data.products,
      filtered: data.products,
      order: "Latest",
      size: "All"
    };
  },
  computed: {
    productsCount() {
      return this.filtered.length;
    }
  },
  methods: {
    changeOrder(order) {
      console.log("Shop : methods : changeOrder() : ", order);
      this.order = order;
      this.filtered.sort((a, b) => {
        if (order === "Latest") {
          return a._id > b._id ? 1 : -1;
        } else {
          return order === "Lowest" ? a.price - b.price : b.price - a.price;
        }
      });
    },
    changeSize(size) {
      console.log("Shop : methods : changeSize() : ", size);
      this.size = size;
      this.filtered = this.products.filter((product) => size === "All" || product.availableSizes.includes(size));
      this.changeOrder(this.order);
    }
  }
};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-areas:
    "header"
    "main"
    "footer";
  grid-template-rows: 5rem 1fr 5rem;
  grid-template-columns: 1fr;
  height: 100%;
}

header {
  grid-area: header;
  background-color: #203040;
  color: #ffffff;
  display: flex;
  align-items: center;
  padding: 0.5rem;
}

header a {
  color: #ffffff;
  text-decoration: none;
}

main {
  grid-area: main;
}

footer {
  grid-area: footer;
  background-color: #203040;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  display: flex;
  flex-wrap: wrap;
}

.main {
  flex: 3 60rem;
}

.sidebar {
  flex: 1 20rem;
}

a:hover {
  color: #ff8000;
}
</style>
