const path = {
  home: '/',
  user: '/user',
  profile: '/user/profile',
  changePasssord: '/user/passsord',
  historyPurchase: '/user/purchase',
  login: '/login',
  register: '/register',
  logout: '/logout',
  productDetail: ':nameId',
  cart: '/cart'
} as const
export default path
