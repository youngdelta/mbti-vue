import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';

// createApp(App).router(router).mount('#app');
const app = createApp(App);

// app.use(store);
app.use(router); // 사용 설정 하기

app.mount('#app');
