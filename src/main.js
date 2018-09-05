import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store'
import firebase from 'firebase'

Vue.use(Vuetify)
firebase.initializeApp({
  apiKey: 'AIzaSyDSd-fyyEgsSFu1Qs4Lxk8m3a5G9tR8aWc',
  authDomain: 'compass-dashboard.firebaseapp.com',
  databaseURL: 'https://compass-dashboard.firebaseio.com',
  projectId: 'compass-dashboard'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
