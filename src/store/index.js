import { createStore } from 'vuex';
import http from '@/services/http';

export default createStore({
  state: {
    login: false,
    usuario: {
      id: '',
      name: '',
      email: '',
      password: '',
      cep: '',
      street: '',
      num: '',
      neighborhood: '',
      city: '',
      state: '',
    },
    usuario_produtos: null,
  },
  getters: {
  },
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_USUARIO(state, payload) {
      // ...state.usuario vou pegar os dados que existem em usuario
      // e combinar"concatenar" com o recebido no payload;
      state.usuario = { ...state.usuario, ...payload };
    },
    UPDATE_USUARIO_PRODUTOS(state, payload) {
      state.usuario_produtos = payload;
    },
    ADD_USUARIO_PRODUTOS(state, payload) {
      // state.usuario_produtos.unshift(payload);
      state.usuario_produtos = [...state.usuario_produtos, payload];
    },
  },
  actions: {
    getUsuario(context, payload) {
      return http.get(`/users/${payload}`).then((response) => {
        context.commit('UPDATE_USUARIO', response.data);
        context.commit('UPDATE_LOGIN', true);
      });
    },
    getUsuarioProdutos(context) {
      http.get(`/products?user_id=${context.state.usuario.id}`).then((response) => {
        context.commit('UPDATE_USUARIO_PRODUTOS', response.data);
      });
    },
    criarUsuario(context, payload) {
      // context.commit('UPDATE_USUARIO', { id: payload.email }); // enviando o email como id;
      // console.log(payload);
      return http.post('/users', payload);
    },
    deslogarUsuario(context) {
      context.commit('UPDATE_USUARIO', {
        id: '',
        name: '',
        email: '',
        password: '',
        cep: '',
        street: '',
        num: '',
        neighborhood: '',
        city: '',
        state: '',
      });
      context.commit('UPDATE_LOGIN', false);
    },
  },
  modules: {
  },
});
