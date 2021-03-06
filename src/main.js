import Vue from 'vue'
import App from './App.vue'
import VeeValidate, { Validator } from 'vee-validate'
import moment from 'moment'
import axios from 'axios'

import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'

import { loadLanguage, i18n } from './setup/i18n-setup'
import router from './router'
import store from './store'

Vue.config.productionTip = false
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL

Vue.use(VeeValidate, {
  events: 'blur',
  locale: 'en'
})

router.beforeEach(async (to, from, next) => {
  const lang = (navigator.language || navigator.userLanguage).replace('-', '_')
  await loadLanguage(lang)
  Validator.localize(lang)
  moment.locale(lang)
  next()
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
