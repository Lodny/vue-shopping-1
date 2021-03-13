import Vue from "vue";
import Vuex from "vuex";

import PRODUCTS from "./modules/products";
import CART from "./modules/cart";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    PRODUCTS,
    CART
  }
});
