import { createApp } from 'vue';
import '@/styles/index.scss';
import 'virtual:svg-icons-register';

import App from '@/App.vue';
import { useTheme } from '@/composables/useTheme';
import { router } from '@/router';

useTheme(document, localStorage).loadTheme();

const app = createApp(App);

app.use(router);

app.mount('#app');
