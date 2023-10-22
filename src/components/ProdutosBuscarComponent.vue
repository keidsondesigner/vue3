<template>
  <form>
    <!-- eslint-disable-next-line vuejs-accessibility/form-control-has-label -->
    <input
      v-model="busca"
      id="busca"
      type="text"
      name="busca"
      placeholder="Buscar..."
    />
    <!-- eslint-disable-next-line vuejs-accessibility/form-control-has-label -->
    <input
      @click.prevent="buscarProdutos"
      id="lupa"
      type="submit"
      value="Buscar"
    />
    <!-- {{ busca }} -->
  </form>
</template>

<script>
export default {
  name: 'ProdutoBuscarComponent',
  data() {
    return {
      busca: '',
    };
  },
  methods: {
    buscarProdutos() {
      this.$router.push({ query: { q: this.busca } });
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  max-width: 600px;
  margin: 30px auto 60px auto;
  position: relative;
}

#busca {
  width: 100%;
  padding: 20px;
  border: none;
}
#busca:focus, #busca:hover {
  transform: scale(1.1);
}

#lupa {
  width: 62px;
  height: 62px;
  background: url(../assets/search.svg) no-repeat center center;
  text-indent: -150px;
  border: none;
  cursor: pointer;
  box-shadow: none;

  position: absolute;
  top: 0px;
  right: 0px;
}
</style>
