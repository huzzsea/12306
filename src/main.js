import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import axios from 'axios'
import VueAxios from 'vue-axios'

const Vue = createApp(App)
Vue.use(router)
Vue.use(VueAxios,axios)
Vue.mount('#app')