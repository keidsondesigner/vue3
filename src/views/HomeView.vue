<template>
  <section class="home">
    <h1>Compre ou Venda</h1>
    <ProdutosBuscarComponent />
    <ProdutoListarComponent />
  </section>
</template>

<script>
import ProdutosBuscarComponent from '@/components/ProdutosBuscarComponent.vue';
import ProdutoListarComponent from '@/components/ProdutosListarComponent.vue';

export default {
  name: 'HomeView',
  components: {
    ProdutosBuscarComponent,
    ProdutoListarComponent,
  },
};
</script>

<style lang="scss" scoped>
h1 {
  color: #87f;
  margin-top: 40px;
  font-size: 2rem;
  text-align: center;
}
</style>
