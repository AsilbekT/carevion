import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router/index";

import "./plugins/bootstrap.js";
import "icofont/dist/icofont.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/scss/style.scss";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
