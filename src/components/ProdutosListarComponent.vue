<template>
  <section>
    <h1>Produto Lista</h1>
    <div v-for="item in produtos" :key="item.id">
      <img
        v-if="item.images"
        :src="item.images[0].src"
        :alt="item.mages[0].name"
      />
      <h2>
        {{ item.name }}
      </h2>
      <p>
        {{ item.description }}
      </p>
      <p>
        {{ item.value }}
      </p>
    </div>
  </section>
</template>

<script>
import http from '@/services/http';
import serialize from '@/helpers/serialize';

export default {
  name: 'ProdutoListarComponent',
  data() {
    return {
      produtos: [],
      produtosPorPagina: 9,
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

</style>
