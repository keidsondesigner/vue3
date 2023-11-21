<template>
  <section >
    <h1>Detalhes usuário</h1>
    <nav class="sidenav">
      <ul>
        <li>
          <router-link :to="{ name: 'usuario-produtos'}">Produtos</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'compras'}">Compras</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'vendas'}">Vendas</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'usuario-editar'}">Editar usuário</router-link>
        </li>
        <li>
          <button @click.prevent="deslogarUser">Sair da conta</button>
        </li>
      </ul>
    </nav>
    <Transition name="fade">
      <router-view></router-view>
    </Transition>
    <!-- <p>dados do usuario{{ $store.state.usuario }}</p> -->
  </section>
</template>

<script>
export default {
  name: 'UsuarioView',
  components: {},
  methods: {
    deslogarUser() {
      this.$store.dispatch('deslogarUsuario');
      this.$router.push('/login');
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
