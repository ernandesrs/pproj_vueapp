import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/css/tailwindcss.css";
import icons from './utils/icons';

const app = createApp(App);

app.config.globalProperties.$helpers = {
    icon: icons
};

app.use(router);

app.mount("#app");
