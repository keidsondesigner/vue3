<template>
  <header>
    <nav>
    <router-link to="/" class="logo">
      <img src="@/assets/ranek.svg" alt="">
    </router-link>
    <router-link v-if="$store.state.login" to="/usuario" class="btn">
      {{  getNomeUser }}
    </router-link>
    <router-link v-else to="/login" class="btn">Login</router-link>
    <!--
    TESTE EVENT EMIT
    <TesteEventEmit @enviandoClick="recebendoClick" />
    <p v-if="dadosRecebidosDoEmit">{{ dadosRecebidosDoEmit }}</p>
    <p v-if="dadosRecebidosDoEmit.nome">{{ dadosRecebidosDoEmit }}</p>
    -->
  </nav>
  </header>
</template>

<script>
// import TesteEventEmit from '@/components/TesteEventEmit.vue';

export default {
  name: 'HeaderComponent',
  components: {
    // TesteEventEmit,
  },
  data() {
    return {
      dadosRecebidosDoEmit: Object,
    };
  },
  computed: {
    getNomeUser() {
      console.log('aquiii');
      return this.$store.state.usuario.name.replace(/ .*/, ''); // replace() para pegar só o primeiro nome do usuário;
    },
  },
  methods: {
    recebendoClick(dadosRecebidos) {
      console.log('recebendoClick');
      this.dadosRecebidosDoEmit = dadosRecebidos;
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);
}

.logo {
  margin: 10px 0;
}

.logo img {
  width: 90px;
}

</style>
