import { createApp } from 'vue'
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import Vue3TouchEvents from 'vue3-touch-events'
import { VueMasonryPlugin } from 'vue-masonry'
import timeago from 'vue-timeago3'
import { createPinia } from 'pinia'
import router from './router'
import '~vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
import '~vue-select/dist/vue-select.css'
import '~swiper/swiper.min.css'
import '~swiper/modules/navigation/navigation.min.css'
import '~swiper/modules/pagination/pagination.min.css'
import '~swiper/modules/scrollbar/scrollbar.min.css'
import '@/assets/sass/main.sass'

import App from './App.vue'

createApp(App)
  .use(Vue3TouchEvents)
  .use(PerfectScrollbar)
  .use(VueMasonryPlugin)
  .use(timeago)
  .use(createPinia())
  .use(router)
  .mount('#app')
