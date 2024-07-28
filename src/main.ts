import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import router from './router'
import './style.css'
import App from './App.vue'

//vuetify
import vuetify from './plugins/vuetify.ts'
import '@mdi/font/css/materialdesignicons.css';

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

createApp(App).use(router).use(pinia).use(vuetify).mount('#app')
    