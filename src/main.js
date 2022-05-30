import { createApp } from 'vue'
import '@/assets/sass/main.sass'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vue-select/dist/vue-select.css';
import Vue3TouchEvents from "vue3-touch-events";
import {VueMasonryPlugin} from 'vue-masonry';


createApp(App).use(Vue3TouchEvents).use(VueMasonryPlugin).use(store).use(router).mount('#app')
