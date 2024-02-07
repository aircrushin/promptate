import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import naive from 'naive-ui'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueToast from 'vue-toast-notification';
// 引入样式
import 'vue-toast-notification/dist/theme-default.css';

library.add(faQuestionCircle, faCopy)
createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).use(naive).use(VueToast).mount('#app')
