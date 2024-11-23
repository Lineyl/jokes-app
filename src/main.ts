import { createApp } from 'vue';

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

import './assets/main.css';
import App from './App.vue';

const app = createApp(App);

app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: { darkModeSelector: false },
  },
  ripple: true,
});

app.mount('#app');
