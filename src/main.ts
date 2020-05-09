import Vue from 'vue'
import 'lib-flexible'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import 'utils/permission'
import SvgIcon from '@/components/SvgIcon.vue'
import '@/icons' // icon
import '@/style/common.scss'
import { Lazyload } from 'vant'
import defaultSettings from '@/settings'

// options 为可选参数，无则不传
Vue.use(Lazyload)

Vue.component('svg-icon', SvgIcon)

if (process.env.NODE_ENV === 'development' && defaultSettings.vconsole) {
  const VConsole = require('vconsole')
  new VConsole()
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
