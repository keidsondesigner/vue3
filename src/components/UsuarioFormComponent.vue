<template>
  <section>
    <form>
      <label for="nome">
        Nome
        <input id="nome" type="text" name="nome" v-model="name">
      </label>
      <label for="email">
        Email
        <input id="email" type="email" name="email" v-model="email">
      </label>
      <label for="senha">
        Senha
        <input id="senha" type="password" name="senha" v-model="password">
      </label>
      <label for="cep">
        Cep
        <input id="cep" type="text" name="cep" v-model="cep" @keyup="buscarCep">
      </label>
      <label for="rua">
        Rua
        <input id="rua" type="text" name="rua" v-model="street">
      </label>
      <label for="numero">
        Número
        <input id="numero" type="number" name="numero" v-model="num">
      </label>
      <label for="bairro">
        Bairro
        <input id="bairro" type="text" name="bairro" v-model="neighborhood">
      </label>
      <label for="cidade">
        Cidade
        <input id="cidade" type="text" name="cidade" v-model="city">
      </label>
      <label for="estado">
        Estado
        <input id="estado" type="text" name="estado" v-model="state">
      </label>
      <div class="button">
        <slot></slot>
      </div>
    </form>
  </section>
</template>
<script>
import { getCepService } from '@/services/getCepService';

export default {
  name: 'UsuarioFormComponent',
  computed: {
    name: {
      get() {
        return this.$store.state.usuario.name;
      },
      set(value) {
        this.$store.commit('UPDATE_USUARIO', { name: value });
      },
    },
    email: {
      get() {
        return this.$store.state.usuario.email;
      },
      set(value) {
        this.$store.commit('UPDATE_USUARIO', { email: value });
      },
    },
    password: {
      get() {
        return this.$store.state.usuario.password;
      },
      set(value) {
        this.$store.commit('UPDATE_USUARIO', { password: value });
      },
    },
    cep: {
      get() {
        return this.$store.state.usuario.cep;
      },
      set(value) {
        this.$store.commit('UPDATE_USUARIO', { cep: value });
      },
    },
    street: {
      get() {
        return this.$store.state.usuario.street;
      },
      set(value) {
        this.$store.commit('UPDATE_USUARIO', { street: value });
      },
    },
    num: {
      get() {
        return this.$store.state.usuario.num;
      },
      set(value) {
        this.$store.commit('UPDATE_USUARIO', { num: value });
      },
    },
    neighborhood: {
      get() {
        return this.$store.state.usuario.neighborhood;
      },
      set(value) {
        this.$store.commit('UPDATE_USUARIO', { neighborhood: value });
      },
    },
    city: {
      get() {
        return this.$store.state.usuario.city;
      },
      set(value) {
        this.$store.commit('UPDATE_USUARIO', { city: value });
      },
    },
    state: {
      get() {
        return this.$store.state.usuario.state;
      },
      set(value) {
        this.$store.commit('UPDATE_USUARIO', { state: value });
      },
    },
  },
  methods: {
    buscarCep() {
      const cep = this.cep.replace(/\D/g, '');
      if (cep.length === 8) {
        getCepService(cep).then((resposnse) => {
          console.log(resposnse);
          console.log(resposnse.data);
          this.street = resposnse.data.logradouro;
          this.neighborhood = resposnse.data.bairro;
          this.city = resposnse.data.localidade;
          this.state = resposnse.data.uf;
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
}
</style>
