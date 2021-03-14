export default {
  namespaced: true,
  state: {
    inCart: []
  },
  mutations: {
    ADD_TO_CART(state, newItem) {
      console.log("cart : store : mutations : ADD_TO_CART() : inCart[] : newItem : ", state.inCart.length, newItem);
      const cartItems = [...state.inCart];
      const item = cartItems.find(item => item._id === newItem._id);
      if (item) {
        item.count++;
        state.inCart = cartItems;
        console.log("cart : store : mutations : ADD_TO_CART() : item.count : ", item.count);
      } else {
        newItem.count = 1;
        state.inCart = [...cartItems, newItem];
      }
    },
    REMOVE_IN_CART(state, removeItem) {
      const cartItems = state.inCart.filter(item => item._id !== removeItem._id);
      state.inCart = cartItems;
    }
  },
  actions: {
    addToCart({ commit }, newItem) {
      console.log("cart : store : products : actions : addToCart() : newItem : ", newItem);
      setTimeout(() => commit("ADD_TO_CART", newItem), 200);
    },
    removeInCart({ commit }, removeItem) {
      console.log("cart : store : products : actions : addToCart() : removeItem : ", removeItem);
      setTimeout(() => commit("REMOVE_IN_CART", removeItem), 200);
    }
  },
  getters: {
    inCart: state => state.inCart
    // countInCart: state => state.inCart.length
  }
};
