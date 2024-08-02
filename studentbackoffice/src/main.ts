import { createApp } from 'vue'
import './assets/index.css'
import App from './App.vue'
import router from './router/router.js'
import i18n from './data/translate.cjs';
import FlagIcon from 'vue-flag-icon'
import { createAuth0 } from '@auth0/auth0-vue';
import store from './store/store'; 
const app =createApp(App)
app.use(router);
app.use(i18n);
app.use(FlagIcon);
app.use(store); 
app.use(
    createAuth0({
      domain: "dev-nokuvgx3njqonar7.us.auth0.com",
      clientId: "eZF1KseBa8dT1BCrI6tMsEzbNWIf3ICg",
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    })
  );

app.mount('#app')
