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
          sidebar
        </div>
      </div>
    </main>
    <footer>All right is reserved.</footer>
  </div>
</template>

<script>
import Filters from "@/components/Filters";
import Products from "@/components/Products";
import data from "../../data.json";

export default {
  data() {
    return {
      products: data.products,
      filtered: data.products,
      order: "Latest",
      size: "All",
    };
  },
  components: {
    Filters,
    Products,
  },
  computed: {
    productsCount() {
      return this.filtered.length;
    },
  },
  methods: {
    changeOrder(order) {
      console.log("Shop : methods : changeOrder() : ", order);
    },
    changeSize(size) {
      console.log("Shop : methods : changeSize() : ", size);
      this.filtered = this.products.filter((product) => size === "All" || product.availableSizes.includes(size));
    },
  },
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
