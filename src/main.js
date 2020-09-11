import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.css'
import router from './router'
import store from './store'
import hansonUI from './packages/index' // 引入自己的ui库

createApp(App).use(hansonUI).use(store).use(router).mount('#app')