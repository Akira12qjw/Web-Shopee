import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import HOME_EN from 'src/locales/en/home.json'
import PRODUCT_EN from 'src/locales/en/product.json'
import HOME_vi from 'src/locales/vi/home.json'
import PRODUCT_vi from 'src/locales/vi/product.json'
export const locales = {
  en: 'English',
  vi: 'Tiếng Việt'
} as const

export const resources = {
  en: {
    home: HOME_EN,
    product: PRODUCT_EN
  },
  vi: {
    home: HOME_vi,
    product: PRODUCT_vi
  }
} as const
export const defaultNS = 'home'
// eslint-disable-next-line import/no-named-as-default-member
i18next.use(initReactI18next).init({
  resources,
  lng: 'vi',
  ns: ['home', 'product'],
  fallbackLng: 'vi',
  defaultNS,
  interpolation: {
    escapeValue: false // react already safes from xss
  }
})
