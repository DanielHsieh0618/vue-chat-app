import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// import { auth } from './services/firebase'
import VueChatScroll from 'vue-chat-scroll'

import vuetify from './plugins/vuetify';
Vue.use(VueChatScroll)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
