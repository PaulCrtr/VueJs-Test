import Vue from "vue";
import VueRouter from "vue-router";
import store from "./vuex/store";
import App from "./App.vue";
import HelloWorld from "./components/HelloWorld.vue";
import vuetify from './plugins/vuetify'

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [{ name: "home", path: "/", component: HelloWorld }];

const router = new VueRouter({
  routes,
});

new Vue({
  store,
  router,
  vuetify,
  render: (h) => h(App)
}).$mount("#app");
