import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

app.mount('#app')
