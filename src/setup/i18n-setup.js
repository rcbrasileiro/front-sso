import Vue from 'vue'
import VueI18n from 'vue-i18n'
import axios from 'axios'

import en from '../lang/en'

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: { en }
})

const loadedLanguages = ['en']

function setI18nLanguage (lang) {
  i18n.locale = lang
  axios.defaults.headers.common['Accept-Language'] = lang
  document.querySelector('html').setAttribute('lang', lang)
  return lang
}

export async function loadLanguage (lang) {
  if (i18n.locale === lang) {
    return setI18nLanguage(lang)
  }

  if (loadedLanguages.includes(lang)) {
    return setI18nLanguage(lang)
  }

  try {
    const messages = await import(/* webpackChunkName: "lang-[request]" */ `../lang/${lang}.js`)

    i18n.setLocaleMessage(lang, messages.default)
    loadedLanguages.push(lang)
    return setI18nLanguage(lang)
  } catch (error) {
    return setI18nLanguage('en')
  }
}
