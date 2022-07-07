import Vue from "vue";
import VCharts from 'v-charts';
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import "./plugins/ant-design-vue";
import "@/assets/css/reset.less";

Vue.use(VCharts);
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
  components: { App },
  temlplate: '<App>'
}).$mount('#app');
