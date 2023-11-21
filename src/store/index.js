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
  },
  actions: {
    getUsuario(context, payload) {
      return http.get(`/users/${payload}`).then((response) => {
        context.commit('UPDATE_USUARIO', response.data);
        context.commit('UPDATE_LOGIN', true);
      });
    },
    criarUsuario(context, payload) {
      // context.commit('UPDATE_USUARIO', { id: payload.email }); // enviando o email como id;
      // console.log(payload);
      return http.post('/users', payload);
    },
  },
  modules: {
  },
});
