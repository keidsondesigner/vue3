<template>
  <section class="container">
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
.container {
  display: grid;
  grid-template-columns: minmax(140px, 200px) 1fr;
  max-width: 900px;
  margin: 40px auto;
  grid-gap: 30px;
  padding: 20px;
}

@media screen and (max-width: 500px) {
  .container {
    grid-template-columns: 1fr;
    margin: 0px auto;
  }
}

.sidenav a, .sidenav button {
  padding: 10px;
  display: block;
  background: #f4f7fc;
  margin-bottom: 10px;
  border-radius: 4px;
}

.sidenav a.router-link-exact-active {
  background: #87f;
  color: #fff;

}

.sidenav button {
  border: none;
  width: 100%;
  font-size: 1rem;
  text-align: left;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  cursor: pointer;
}
</style>
