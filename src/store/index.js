import { createStore } from 'vuex';
import http from '@/services/http';

export default createStore({
  state: {
    login: false,
    usuario: {
      id: '',
      name: '',
      password: '',
      cep: '',
      street: '',
      num: '',
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
      state.usuario = payload;
    },
  },
  actions: {
    getUsuario(context, payload) {
      http.get(`/users/${payload}`).then((response) => {
        context.commit('UPDATE_USUARIO', response.data);
        context.commit('UPDATE_LOGIN', true);
      });
    },
  },
  modules: {
  },
});
