import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import ProdutoDetalhesView from '../views/ProdutoDetalhesView.vue';
import UsuarioView from '../views/usuario/UsuarioView.vue';
import UsuarioProdutoView from '../views/usuario/UsuarioProdutoView.vue';
import UsuarioEditarView from '../views/usuario/UsuarioEditarView.vue';
import UsuarioComprasView from '../views/usuario/UsuarioComprasView.vue';
import UsuarioVendasView from '../views/usuario/UsuarioVendasView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/produto/:id',
    name: 'produtoDetalhes',
    component: ProdutoDetalhesView,
    props: true,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/usuario',
    component: UsuarioView,
    children: [
      {
        path: '',
        name: 'usuario-produtos',
        component: UsuarioProdutoView,
      },
      {
        path: 'editar',
        name: 'usuario-editar',
        component: UsuarioEditarView,
      },
      {
        path: 'compras',
        name: 'compras',
        component: UsuarioComprasView,
      },
      {
        path: 'vendas',
        name: 'vendas',
        component: UsuarioVendasView,
      },
    ],
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
