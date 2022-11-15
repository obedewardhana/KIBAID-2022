import Vue from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  axios,
  render: h => h(App)
}).$mount('#app')
