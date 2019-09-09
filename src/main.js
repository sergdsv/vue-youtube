import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import router from './router'
import store from './store'
import filterDate from '@/filters/date.filter'
import messagePlagin from '@/utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

Vue.use(messagePlagin)
Vue.use(Vuelidate)

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.filter('datefilter', filterDate)

firebase.initializeApp({
  apiKey: "AIzaSyCYhBDmdHaieD1p5H774nZCyKF203cCJ-s",
  authDomain: "vue-dsv.firebaseapp.com",
  databaseURL: "https://vue-dsv.firebaseio.com",
  projectId: "vue-dsv",
  storageBucket: "",
  messagingSenderId: "241037395633",
  appId: "1:241037395633:web:3195788bd8169b7a"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if(!app){
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})


