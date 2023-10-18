import { createApp } from 'vue'
import '@/styles/index.scss'

import App from './App.vue'
import {useTheme} from "@/composables/useTheme";

useTheme(document, localStorage).loadTheme()

const app = createApp(App)
app.mount('#app')
