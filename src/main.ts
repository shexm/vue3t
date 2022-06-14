import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import App from './App.vue'
import 'uno.css'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(),
  routes
})
const pinia = createPinia()
app.use(pinia)
app.use(router)
app.mount('#app')
