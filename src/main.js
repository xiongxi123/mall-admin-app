import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import "./plugins/ant-design-vue";
import "@/assets/css/reset.less";

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
  components: { App },
  temlplate: '<App>'
}).$mount('#app');
