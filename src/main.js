import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import './registerServiceWorker'
import Paginate from 'vuejs-paginate'
import router from './router'
import store from './store'
import tooltipDirective from '@/directives/tooltip.directive'
import Loader from '@/components/app/Loader'
import messagePlugin from '@/utils/message.plugin'
import dateFilter from './filters/date.filter'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import currencyFilter from './filters/currency.filter'
import localizeFilter from './filters/localize.filter'

Vue.config.productionTip = false

Vue.component('Paginate', Paginate)
Vue.component('Loader', Loader)
Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.filter('localize', localizeFilter)
Vue.filter('currency', currencyFilter)
Vue.directive('tooltip', tooltipDirective)

firebase.initializeApp({
  apiKey: 'AIzaSyAeGhdjbih3TFi06GbLltI3HovuuGapXts',
  authDomain: 'crm-vue-log.firebaseapp.com',
  projectId: 'crm-vue-log',
  storageBucket: 'crm-vue-log.appspot.com',
  messagingSenderId: '177460138557',
  appId: '1:177460138557:web:4c49e0c62cd35d05d15054',
  measurementId: 'G-X0CHSNTLMW'
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
