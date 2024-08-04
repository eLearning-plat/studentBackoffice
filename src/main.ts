import { createApp } from 'vue'
import './assets/index.css'
// @ts-expect-error
import App from './App.vue'
// @ts-expect-error
import router from './router/router.js'
// @ts-expect-error
import i18n from './data/translate.cjs';
// @ts-expect-error
import FlagIcon from 'vue-flag-icon'
const app =createApp(App)
app.use(router);
app.use(i18n);
app.use(FlagIcon);
app.mount('#app')
