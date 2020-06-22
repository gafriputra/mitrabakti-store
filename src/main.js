import Vue from 'vue'
import Vuex from 'vuex'
import VueSweetalert2 from 'vue-sweetalert2'
import Multiselect from 'vue-multiselect'
import App from './App.vue'
import router from './router'
import storeData from './store'

Vue.use(Vuex)
Vue.use(VueSweetalert2)
Vue.component('multiselect', Multiselect)

Vue.config.productionTip = false
const store = new Vuex.Store(storeData)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
