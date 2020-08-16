import Vue from "vue";
import Vuex from "vuex";
import Articles from "./modules/articles";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {Articles}
});
