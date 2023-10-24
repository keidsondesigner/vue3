import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // sempre que renderizar uma nova rota, a página inicia no topo;
    return window.scrollTo({ top: 0, behavior: 'smooth' });
  },
});

export default router;
