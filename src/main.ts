import { createApp } from 'vue'
import App from './App.vue'
import { i18n } from './i18n'

import './assets/main.css'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

createApp(App).use(i18n).mount('#app')
