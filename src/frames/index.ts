import type {App} from "vue";
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'

export const setupFrames = (app: App) => {
  app.use(Antd)
}