import Vue from "vue";
import Vuex from "vuex";
import getUsers from "../services/users-service";

Vue.use(Vuex);

const state = {
  users: [],
};

const getters = {
  users(state) {
    return state.users;
  },
};

const mutations = {
  SET_USERS(state, payload) {
    state.users = payload;
  },
};

const actions = {
  getUsers(context) {
    getUsers().then((res) => {
      context.commit("SET_USERS", res);
    });
  },
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});
