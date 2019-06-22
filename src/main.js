import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueHead from 'vue-head'

Vue.use(VueHead)

Vue.config.productionTip = false

new Vue({
  router,
  head: {
    meta: [
      {name: 'description', content: ''},
    ],
  },
  render: h => h(App),
}).$mount('#app')
