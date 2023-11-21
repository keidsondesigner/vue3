<template>
  <section>
    <h2>Crie sua conta</h2>
    <button v-if="!criar" class="btn" @click="criar = true">Criar conta</button>
    <UsuarioForm v-else>
      <button class="btn" @click.prevent="criarUsuario">Criar Usuário</button>
    </UsuarioForm>
  </section>
</template>
<script lang="js">
import UsuarioForm from '@/components/UsuarioFormComponent.vue';

export default {
  name: 'LoginCriarComponent',
  components: {
    UsuarioForm,
  },
  data() {
    return {
      criar: false,
    };
  },
  methods: {
    async criarUsuario() {
      try {
        this.$store.state.usuario.id = this.$store.state.usuario.email;

        await this.$store.dispatch('criarUsuario', this.$store.state.usuario);
        await this.$store.dispatch('getUsuario', this.$store.state.usuario.email);
        this.$router.push('/usuario');
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 10px;
}

.btn {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
</style>
