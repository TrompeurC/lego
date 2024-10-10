import Index from '@/views/Index.vue'
import type { App } from 'vue'
import {  createRouter , createWebHistory} from 'vue-router'

const Home = () => import('../views/Home.vue')
const Editor = () => import('../views/Editor.vue')
const Template = () => import('../views/Template.vue')


export const router = createRouter ({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'index',component: Index, children: [
      { path: '', name: 'home', component: Home },
      { path: 'template', name: 'template', component: Template },
    ] },
    { path: '/editor', name: 'editor', component: Editor },
  ]
})

export function setupRouter(app: App) {
  app.use(router)
}