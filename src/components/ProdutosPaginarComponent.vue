<template>
  <ul v-if="paginasTotal > 1">
    <li v-for="pagina in paginas"
      :key="pagina"
      :class="paginaAtual(pagina)">
      <router-link :to="{query: query(pagina)}">
        {{ pagina }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ProdutosPaginarComponent',
  props: {
    produtosPorPagina: {
      type: Number,
      default: 1,
    },
    produtosTotal: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    query(pagina) {
      return {
        ...this.$route.query,
        _page: pagina,
      };
    },
    paginaAtual(pagina) {
      if (this.$route.href.includes(pagina)) {
        return 'active';
      }
      return 'no-active';
    },
  },
  computed: {
    paginas() {
      // eslint-disable-next-line no-underscore-dangle
      const paginaAtual = Number(this.$route.query._page);
      const range = 9;
      const offset = Math.ceil(range / 2);

      const total = this.paginasTotal;
      const pagesArray = [];

      // eslint-disable-next-line no-plusplus
      for (let i = 1; i <= total; i++) {
        pagesArray.push(i);
      }

      pagesArray.splice(0, paginaAtual - offset);
      pagesArray.splice(range, paginaAtual);

      return pagesArray;
    },
    paginasTotal() {
      // calcular quantas páginas ainda tem disponível;
      const totalPaginas = this.produtosTotal / this.produtosPorPagina;
      // return totalPaginas;
      // eslint-disable-next-line no-console
      console.log('totalPaginas', totalPaginas);
      console.log('totalPaginas', Math.ceil(totalPaginas));
      return (totalPaginas !== Infinity) ? Math.ceil(totalPaginas) : 0;
      // totalPaginas retonar 1.33333 com Math.ceil arredondo o valor para 2;
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  grid-column: 1 / -1;
}
li {
  display: inline-block;
}

li {
  padding: 4px 8px;
  border-radius: 2px;
  margin: 4px;
  color: #fff;
}

li:hover {
  background: rgb(108, 93, 207);
  color: #fff;
}
li a:hover {
  color: #fff;
}

.active {
  background: #87f;
  color: #fff;
  padding: 4px 8px;
}
.active a {
  color: #fff;
}
</style>
