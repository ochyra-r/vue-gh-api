import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import VueResurce from "vue-resource";

Vue.use(VueResurce);

Vue.config.productionTip = false;

Vue.filter("formatDate", function(value: string) {
  if (value) {
    return new Date(value).toDateString();
  }
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
