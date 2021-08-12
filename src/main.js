import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import './styles/index.css'
import router from './router'
import install from './packages/index.js'
import store from './store'
const app = createApp(App)
// install(app)
app.use(store).use(ElementPlus).use(install).use(router).mount('#app')