import { createApp } from "vue";
import "./style.css";
import "virtual:uno.css";
import "virtual:windi.css";
import App from "./App.vue";
import { createPinia } from "pinia";

createApp(App).use(createPinia()).mount("#app");
