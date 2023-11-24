<template>
  <section >
    <h1>Adiconar produto</h1>
    <ProdutoAdicionarComponent />
    <h2>Seus Produtos</h2>
    {{ usuario_produtos }}
  </section>
</template>

<script>
import ProdutoAdicionarComponent from '@/components/ProdutosAdicionarComponent.vue';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'UsuarioProdutoView',
  components: {
    ProdutoAdicionarComponent,
  },
  computed: {
    ...mapState(['login', 'usuario', 'usuario_produtos']),
  },
  methods: {
    ...mapActions(['getUsuarioProdutos']),
  },
  watch: {
    login() {
      this.getUsuarioProdutos();
    },
  },
  created() {
    if (this.login) {
      this.getUsuarioProdutos();
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
