import { createApp } from 'vue';
import '@/styles/index.scss';
import 'virtual:svg-icons-register';
import App from '@/App.vue';
import { useTheme } from '@/composables/useTheme';
import { router } from '@/router';
import { i18n } from '@/i18n';

useTheme(document, localStorage).loadTheme();

const app = createApp(App);

app.use(router);

app.use(i18n);

app.mount('#app');
