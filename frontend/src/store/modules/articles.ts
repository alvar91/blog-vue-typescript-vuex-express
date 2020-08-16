import axios from "axios";

const state = {
  articles: []
};

const mutations = {
  setData(state, payload) {
    state.articles = payload;
  }
};

const getters = {
  getById: (state, getters) => (id) => {
    return state.articles.find(item => item.id === parseInt(id));
  }
};

const actions = {
  async fetchApi({commit}) {
    const res = await axios.get("https://blog-vue-express.herokuapp.com/articles");
    commit("setData", res.data)
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};