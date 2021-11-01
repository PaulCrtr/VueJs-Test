import Vue from "vue";
import VueRouter from "vue-router";
import store from "./vuex/store";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";

Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
