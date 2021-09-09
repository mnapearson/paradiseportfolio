import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueCarousel from "vue-carousel";
import "vue-progress-path/dist/vue-progress-path.css";
import VueProgress from "vue-progress-path";

Vue.config.productionTip = false;
Vue.use(VueCarousel);
Vue.use(VueProgress, {
  defaultShape: "heart",
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
