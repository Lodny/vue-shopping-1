<template>
  <div class="filter">
    <div>{{ productsCount }} Products</div>
    <div>
      Order
      <select @change="changeOrder">
        <option v-for="order in orders" :key="order">{{ order }} </option>
      </select>
    </div>
    <div>
      Filter
      <select @change="changeSize">
        <option v-for="size in sizes" :key="size" :value="size">{{ size }} </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  // props: {
  //   productsCount: {
  //     type: Number,
  //     require: true
  //   }
  // },
  data() {
    return {
      orders: ["Latest", "Lowest", "Highest"],
      sizes: ["All", "XS", "S", "M", "L", "XL", "XXL"]
    };
  },
  computed: {
    productsCount() {
      return this.$store.getters["PRODUCTS/filteredCount"];
    }
  },
  methods: {
    changeOrder(e) {
      console.log("Filter ; methods : changeOrder() : ", e);
      console.log("Filter ; methods : changeOrder() : ", e.target.value);
      // this.$emit("changeOrder", e.target.value);
      this.$store.dispatch("PRODUCTS/changeOrder", e.target.value);
    },
    changeSize(e) {
      console.log("Filter ; methods : changeSize() : ", e);
      console.log("Filter ; methods : changeSize() : ", e.target.value);
      // this.$emit("changeSize", e.target.value);
      this.$store.dispatch("PRODUCTS/changeSize", e.target.value);
    }
  }
};
</script>

<style scoped>
.filter {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  margin: 1rem;
  border-bottom: 0.1rem #c0c0c0 solid;
}

.filter div {
  flex: 1;
}
</style>
