import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import hansonUI from './packages/index' // 引入自己的ui库

createApp(App).use(hansonUI).use(store).use(router).mount('#app')
const app2 = createApp(App)
app2.directive('highlight', {
    beforeMount(el, binding) {
        el.style.color = binding.value;
    },
    pdated(){},
    mounted(){},
    created(){}    
});

console.log(app2.directive())