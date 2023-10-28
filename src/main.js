import { createApp } from 'vue';
import LoadingComponent from '@/components/LoadingComponent.vue';
import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);

app.component('LoadingComponent', LoadingComponent);
app.config.globalProperties.$filters = {
  formatarMoeda(value) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  },
};
app.use(store);
app.use(router);
app.mount('#app');
