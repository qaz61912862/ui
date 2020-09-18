import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.css'
import router from './router'
import install from './packages/index.js'
import store from './store'
const app = createApp(App)
// install(app)
app.use(store).use(install).use(router).mount('#app')