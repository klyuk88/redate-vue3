import { createApp } from 'vue'
import '@/assets/sass/main.sass'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vue-select/dist/vue-select.css';


createApp(App).use(store).use(router).mount('#app')
