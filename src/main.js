import Vue from 'vue'
import App from './App.vue'
// import '../assets/css/reset.css'
import router from './router'
import VueLazyload from 'vue-lazyload'
import vueWaterfallEasy from 'vue-waterfall-easy'
import Element from 'element-ui'
import store from './store'
import './styles/element-variables.scss'

//全局样式
import './styles/global.scss'



import 'element-ui/lib/theme-chalk/index.css'

import axios from 'axios'
Vue.use(VueLazyload)

Vue.use(Element, {
  size: 'small'
})


axios.defaults.baseURL = '/'
Vue.prototype.axios = axios;
Vue.config.productionTip = false

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
})


new Vue({
  router,
  store,
	render: h => h(App)
}).$mount('#app')
