import data from "../../../data.json";

export default {
  namespaced: true,
  state: {
    products: data.products,
    filtered: data.products,
    order: "Latest",
    size: "All"
  },
  mutations: {
    // can not call async
    CHANGE_ORDER(state, order) {
      console.log("products : store : mutations : CHANGE_ORDER() : order : ", order);
      state.order = order;
      state.filtered.sort((a, b) => {
        if (order === "Latest") {
          return a._id > b._id ? 1 : -1;
        } else {
          return order === "Lowest" ? a.price - b.price : b.price - a.price;
        }
      });
    },
    CHANGE_SIZE(state, size) {
      console.log("products : store : mutations : CHANGE_SIZE() : size : ", size);
      state.size = size;
      state.filtered = state.products.filter(product => size === "All" || product.availableSizes.includes(size));
      // this.CHANGE_ORDER(state, this.order);
    }
  },
  actions: {
    // can call async
    // changeOrder(context, order) {
    changeOrder({ commit }, order) {
      console.log("products : store : actions : changeOrder() : order : ", order);
      setTimeout(() => commit("CHANGE_ORDER", order), 200);
    },
    changeSize({ commit, state }, size) {
      console.log("products : store : actions : changeSize() : size : ", size, state.order);
      setTimeout(() => {
        commit("CHANGE_SIZE", size);
        commit("CHANGE_ORDER", state.order);
      }, 200);
    }
  },
  getters: {
    filteredCount: state => state.filtered.length
  }
};
