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

export default {
  name: 'ProdutoListarComponent',
  data() {
    return {
      produtos: [],
    };
  },
  methods: {
    getProdutos() {
      // com Axios não preciso transformar meu response em json() ele já faz isso;
      http.get('/products')
        .then((response) => {
          this.produtos = response.data;
        });
    },
  },
  created() {
    this.getProdutos();
  },
};
</script>

<style lang="scss" scoped>

</style>
