import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/css/bootstrap-utilities.min.css'
import axios from 'axios'
window.axios = axios

const app = createApp(App);
app.use(router);
app.mount("#app");
// createApp(App).mount('#app')
