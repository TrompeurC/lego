import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { setupStore } from './store'
import { setupRouter } from './router'
import { setupFrames } from './frames'
async function bootstrap() {
  const app = createApp(App)
  setupRouter(app)
  setupStore(app)
  setupFrames(app)
  app.mount('#app')
}

bootstrap()   
