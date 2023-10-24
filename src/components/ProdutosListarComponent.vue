<template>
  <section class="produtos-container">
    <div v-if="produtos && produtos.length > 0" class="produtos">
      <div v-for="(item, index) in produtos" :key="index" class="produto">
        <router-link to="/">
          <img
            v-if="item.images"
            :src="item.images[0].src"
            :alt="item.mages[0].name"
          />
          <p class="preco">
            {{ item.value }}
          </p>
          <h2 class="titulo">
            {{ item.name }}
          </h2>
          <p>
            {{ item.description }}
          </p>
        </router-link>
      </div>
      <ProdutosPaginarComponent
        :produtosTotal="produtosTotal"
        :produtosPorPagina="produtosPorPagina"
      />
    </div>
    <div v-else-if="produtos && produtos.length === 0">
      <p class="sem-resultado">Buasca sem resultados. Tente outro produto.</p>
    </div>
  </section>
</template>

<script>
import http from '@/services/http';
import serialize from '@/helpers/serialize';

import ProdutosPaginarComponent from './ProdutosPaginarComponent.vue';

export default {
  name: 'ProdutoListarComponent',
  components: {
    ProdutosPaginarComponent,
  },
  data() {
    return {
      produtos: [],
      produtosPorPagina: 9,
      produtosTotal: 0,
    };
  },
  computed: {
    tratarUrl() {
      const query = serialize(this.$route.query);
      return `?_limit=${this.produtosPorPagina}${query}`;
    },
  },
  methods: {
    getProdutos() {
      // com Axios não preciso transformar meu response em json() ele já faz isso;
      http.get(`/products/${this.tratarUrl}`)
        .then((response) => {
          // eslint-disable-next-line no-console
          console.log('getProdutos()', response);
          console.log('response.headers x-total-count: ', response.headers['x-total-count']);
          this.produtosTotal = Number(response.headers['x-total-count']);
          // eslint-disable-next-line no-console
          console.log('produtosPorPagina: ', this.produtosTotal);
          this.produtos = response.data;
        });
    },
  },
  created() {
    // Ativa quando o compenent é criado uma vez;
    this.getProdutos();
  },
  watch: {
    // Ativar sempre o getProdutos() quando houver modificação no tratarUrl();
    tratarUrl() {
      this.getProdutos();
    },
  },
};
</script>

<style lang="scss" scoped>
.produtos-container {
  max-width: 1000px;
  margin: 0 auto;

  .produtos {
    display: grid;
    grid-template-columns: repeat(3, 1fr); // 3 colunas com o mesmo tamanho;
    grid-gap: 20px;
    margin: 30px;

    .produto {
      box-shadow: 0 4px 8px rgb(30, 60, 90, 0.1);
      padding: 10px;
      background: #fff;
      border-radius: 4px;
      transition: all 0.2s;
    }

    .produto:hover {
      box-shadow: 0 4px 8px rgb(30, 60, 90, 0.2);
      transform: scale(1.1);
      position: relative;
      z-index: 1;
    }

    img {
      border-radius: 4px;
      margin-bottom: 20px;
    }

    .titulo {
      margin-bottom: 10px;
    }

    .preco {
      color: #e80;
      font-weight: bold;
    }

    .sem-resultado {
      text-align: center;
    }
  }
}
</style>
