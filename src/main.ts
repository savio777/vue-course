import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Toast, { type PluginOptions as PluginOptionsToast } from 'vue-toastification'

import 'primeicons/primeicons.css'
import 'vue-toastification/dist/index.css'

import App from './App.vue'
import router from './router'
import './main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Toast, { position: 'bottom-right' } as PluginOptionsToast)

app.mount('#app')
