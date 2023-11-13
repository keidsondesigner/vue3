<template>
  <section class="login">
    <h1>Login Page</h1>
    <form>
      <label for="email">
        Email
        <input id="email" type="email" nome="email" v-model="login.email">
      </label>
      <label for="senha">
        Senha
        <input id="senha" type="password" nome="senha" v-model="login.password">
      </label>
      <button class="btn" @click.prevent="logar">Logar</button>
    </form>
    <p class="perdeu-senha">
      <a href="/" target="_blank">Perdeu a senha? Clique aqui.</a>
    </p>
    <LoginCriarComponent />
  </section>
</template>

<script>
import LoginCriarComponent from '@/components/LoginCriarComponent.vue';

export default {
  name: 'LoginView',
  components: {
    LoginCriarComponent,
  },
  data() {
    return {
      login: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    logar() {
      this.$store.dispatch('getUsuario', this.login.email);
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
  font-size: 2rem;
  margin-top: 40px;
  color: #87f;
}
.login {
  max-width: 550px;
  margin: 0 auto;
  padding: 0 20px;

  form {
    display: grid;

    label {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
  }
}

.btn {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}

.perdeu-senha {
  text-align: center;
  margin: 20px auto 0 auto;
}
.perdeu-senha a:hover {
  color: #87f;
  text-decoration: underline;
}
</style>
