import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Notifications from '@kyvg/vue3-notification'
import App from './App.vue'
import './style.css'
import router from './router'

const pinia = createPinia()


createApp(App).use(router).use(pinia).use(Notifications).mount('#app')
