// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'mint-ui/lib/style.css'
import App from './App.vue'
import router from './router'
import MintUI from 'mint-ui'
import Vue2Storage from 'vue2-storage'
import VueResource from 'vue-resource'

Vue.use(MintUI)
Vue.use(VueResource)
Vue.use(Vue2Storage, {
  prefix: 'NN_',
  driver: 'local',
  ttl: 60 * 60 * 24 * 1000 * 365,
} )

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
