import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import { BootstrapVue } from "bootstrap-vue";
// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);
Vue.use(VueSweetalert2);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
