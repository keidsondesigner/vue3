<template>
  <section>
    <p>Produto {{ produto }}</p>
  </section>
</template>

<script>
import http from '@/services/http';

export default {
  name: 'ProdutoDetalhesView',
  props: ['id'],
  components: {},
  data() {
    return {
      produto: null,
    };
  },
  methods: {
    getProduto() {
      http.get(`/products/${this.id}`)
        .then((response) => {
          console.log('ProdutoDetalhesView', response);
          this.produto = response.data;
        });
    },
  },
  created() {
    this.getProduto();
  },
};
</script>

<style lang="scss" scoped>
</style>
