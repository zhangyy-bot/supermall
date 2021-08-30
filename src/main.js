import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 传递给createApp的选项用于配置根组件。当我们挂载应用时，该组件被用作渲染的奇点
// 一个应用徐亚挂载到一个DOM元素中。此时使用mount
createApp(App).use(store).use(router).mount('#app')
