<template>
  <button @click="enviandoClick">Teste EventEmit</button>
</template>

<script>
export default {
  name: 'TesteEventEmit',
  data() {
    return {
      newCadastro: {
        nome: undefined,
        nascimento: undefined,
        sexo: undefined,
        cpf: undefined,
        email: undefined,
        telefone: undefined,
      },
    };
  },
  methods: {
    enviandoClick() {
      console.log('emitindo evento');
      this.newCadastro = {
        nome: 'keidson',
        nascimento: '21/08/1990',
        sexo: 'masculino',
        cpf: '99208237249',
        email: 'keidson@gmail.com',
        telefone: '92994571858',
      };
      this.$emit('enviandoClick', { ...this.newCadastro });
      console.log('emitindo evento e enviando dados', this.newCadastro);
    },
  },
};
</script>

<style lang="scss" scoped></style>
