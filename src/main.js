import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Lara from "./presets/lara";
import Home from "./pages/Home.vue";
import Students from "./pages/management/Students.vue";
import Teachers from "./pages/management/Teachers.vue";
import Courses from "./pages/management/Courses.vue";
import News from "./pages/website/News.vue";
import Corners from "./pages/website/Corners.vue";
import Blog from "./pages/website/Blog.vue";
import Information from "./pages/website/Information.vue";
import Messages from "./pages/community/Messages.vue";
import Charity from "./pages/community/Charity.vue";
import { createRouter, createWebHistory } from "vue-router";
import { createAuth0 } from "@auth0/auth0-vue";



const routes = [
  { path: "/", component: Home },
  { path: "/students", component: Students },
  { path: "/teachers", component: Teachers },
  { path: "/courses", component: Courses},
  { path: "/news", component: News},
  { path: "/blog", component: Blog},
  { path: "/corners", component: Corners},
  { path: "/informations", component: Information},
  { path: "/messages", component: Messages},
  { path: "/charity", component: Charity},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(
  createAuth0({
    domain: "dev-nokuvgx3njqonar7.us.auth0.com",
    clientId: "Zlvzh5AbmyofpRg5CYb1HTmkX1aZdoN6",
    authorizationParams: {
      redirect_uri: window.location.origin
    }
  })
);

app.use(router);

app.use(PrimeVue, {
  unstyled: false,
  pt: Lara,
});

app.mount("#app");
