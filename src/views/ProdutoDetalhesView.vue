<template>
  <section>
    <div v-if="produto" class="produto">
      <ul class="fotos" v-if="produto.images">
        <li v-for="item, index in produto.images" :key="index">
          <img :src="item.src" :alt="item.title">
        </li>
      </ul>

      <div class="info">
        <h1>
          {{ produto.name }}
        </h1>
        <p class="preco">
          {{ $filters.formatarMoeda(produto.value) }}
        </p>
        <p class="descricao">
          {{ produto.description }}
        </p>
        <button class="btn" v-if="produto.sold === 'false'">Comprar</button>
        <button class="btn" v-else disabled>Produto vendido</button>
      </div>

    </div>
    <!-- <p>Produto {{ id }}</p> -->
    <!-- <p>Produto {{ produto }}</p> -->

    <LoadingComponent v-else />
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

.produto {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  max-width: 900px;
  padding: 60px 20xp;
  margin: 0 auto;
}

.preco{
  color: #e80;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 40px;
}

.descricao {
  font-size: 1.2rem;
}

.btn {
  margin-top:  60px;
  widows: 200px;
}
</style>
