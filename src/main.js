import Vue from 'vue'
import ElementUI from 'element-ui'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import App from './App.vue'
import store from './store'
import axios from 'axios'
import mock from './mock'
import dev from './dev'

Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(ElementUI, {
	zIndex: 3000,
})

dev(store)

new Vue({
	router,
	store,
	mock,
	render: h => h(App),
}).$mount('#app')
