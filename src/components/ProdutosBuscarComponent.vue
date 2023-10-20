<template>
  <form>
    <!-- eslint-disable-next-line vuejs-accessibility/form-control-has-label -->
    <input
      v-model="busca"
      id="busca"
      type="text"
      name="busca"
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

</style>
