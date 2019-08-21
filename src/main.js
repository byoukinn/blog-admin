import Vue from 'vue';
import ElementUI from 'element-ui';
import router from './router.js';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.config.productionTip = false
Vue.use(ElementUI, {
  zIndex: 3000
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')