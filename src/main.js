import Vue from 'vue';
import App from './App.vue';

import router from './router';
import '@/icons'; // icon
import '@/styles/index.scss';

import 'weui/dist/style/weui.min.css';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
