import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import HOME_EN from 'src/locales/en/home.json'
import PRODUCT_EN from 'src/locales/en/product.json'
import HOME_vi from 'src/locales/vi/home.json'
import PRODUCT_vi from 'src/locales/vi/product.json'
import CART_EN from 'src/locales/en/cart.json'
import CART_VI from 'src/locales/vi/cart.json'
import INFO_EN from 'src/locales/en/info.json'
import INFO_VI from 'src/locales/vi/info.json'

export const locales = {
  en: 'English',
  vi: 'Tiếng Việt'
} as const

export const resources = {
  en: {
    home: HOME_EN,
    product: PRODUCT_EN,
    cart: CART_EN,
    info: INFO_EN
  },
  vi: {
    home: HOME_vi,
    product: PRODUCT_vi,
    cart: CART_VI,
    info: INFO_VI
  }
} as const
export const defaultNS = 'home'
// eslint-disable-next-line import/no-named-as-default-member
i18next.use(initReactI18next).init({
  resources,
  lng: 'vi',
  ns: ['home', 'product', 'cart', 'info'],
  fallbackLng: 'vi',
  defaultNS,
  interpolation: {
    escapeValue: false // react already safes from xss
  }
})
