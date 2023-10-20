<template>
  <header>
    <nav>
    <router-link to="/" class="logo">
      <img src="@/assets/ranek.svg" alt="">
    </router-link>
    <router-link to="/login" class="btn">Login</router-link>
  </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);
}

.logo {
  margin: 10px 0;
}

.logo img {
  width: 90px;
}

</style>
