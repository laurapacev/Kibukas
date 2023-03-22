import Vue from 'vue'
import App from './App.vue'

// Routes
import router from './routes'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
