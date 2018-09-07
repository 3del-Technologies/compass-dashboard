import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store'
import firebase from 'firebase'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import jQuery from 'jquery'
global.jQuery = jQuery
global.$ = jQuery
let Bootstrap = require('bootstrap')

Vue.use(Vuetify)
Vue.use(BootstrapVue)
Vue.use(Bootstrap)

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
