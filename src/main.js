// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import 'reset-css/reset.css';
import VueAwesomeSwiper from 'vue-awesome-swiper';

// require styles
import 'swiper/dist/css/swiper.css';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App';
import router from './router';
import store from './store';
import '../static/js/fontSize';

import '../static/fonts/iconfont.css';

Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper /* { default global options } */);
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
