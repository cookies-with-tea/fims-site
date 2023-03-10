import { createApp } from 'vue'

import IconTemplate from '@/components/common/IconTemplate.vue'
import 'virtual:svg-icons-register'
import 'virtual:fonts.css'

import ElementPlus from 'element-plus'

// TODO: Убрать стили
import 'element-plus/dist/index.css'
import 'swiper/swiper-bundle.min.css'
import 'swiper/css'

import App from '@/App.vue'
import router from './router'

import '@/styles/index.scss'

const app = createApp(App)

app.component('IconTemplate', IconTemplate)

app.use(ElementPlus)

app.use(router)

app.mount('#app')
