import { createApp } from 'vue'
import '@/assets/sass/main.sass'
import App from './App.vue'
import router from './router'
import 'vue-select/dist/vue-select.css';
import Vue3TouchEvents from "vue3-touch-events";
import {VueMasonryPlugin} from 'vue-masonry';
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
import { createPinia } from 'pinia'


createApp(App).use(Vue3TouchEvents).use(PerfectScrollbar).use(VueMasonryPlugin).use(createPinia()).use(router).mount('#app')
