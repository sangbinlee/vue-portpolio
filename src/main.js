// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// 
import App from './App.vue'
// import router from './router' // export defalut
import { router } from '@/router';// export const


// setup fake backend
import { fakeBackend } from './helpers';
fakeBackend();


// init app 
const app = createApp(App)
// use set
app.use(createPinia())
app.use(router)
// id set
app.mount('#app')
