// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'vue2-animate/dist/vue2-animate.min.css';
import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App';
import router from './router';
import axios from './http';
import store from './store/store';
import './assets/main.css';
import './assets/ele-custom-theme/index.css';

Vue.use(ElementUI);
Vue.config.productionTip = true;
Vue.prototype.axios = axios;
Vue.prototype.calculateAge = (birthday) => { // birthday is a date
  const ageDifMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  axios,
  render: h => h(App),
});