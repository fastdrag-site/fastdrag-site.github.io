import "./assets/main.css";

import { createApp } from "vue";
import ElementPlus from "element-plus";
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import ArcoVue from '@arco-design/web-vue';
import "element-plus/dist/index.css";
import App from "./App.vue";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import '@arco-design/web-vue/dist/arco.css';
import VueVideoPlayer from '@videojs-player/vue'
import 'video.js/dist/video-js.css'

const app = createApp(App);

app.use(ElementPlus);
app.use(ArcoVueIcon);
app.use(ArcoVue);
app.use(VueVideoPlayer);
app.mount("#app");

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
