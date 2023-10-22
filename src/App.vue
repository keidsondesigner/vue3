<template>
  <div id="app">
    <HeaderComponent />
    <main id="main">
      <router-view/>
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  components: {
    FooterComponent,
    HeaderComponent,
  },
};
</script>

<style lang="scss">

* {
  box-sizing: border-box;
}

body, ul, li, h1, h2, h3, h4, h5, h6, p {
  padding: 0px;
  margin: 0px;
}

body {
  font-family: "Avenir", Arial, Helvetica, sans-serif;
  color: #345;
  background: url('./assets/pattern.svg') repeat top;
  font-size: 16px;
}

ul {
  list-style: none;
}

a {
  color: #345;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

.btn {
  display: block;
  padding: 10px 30px;
  background: #87f;
  border-radius: 4px;
  color: #fff;
  text-align: center;
  font-size: 1rem;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
  transition: all 0.3s;
  border: none;
  cursor: pointer;
  &:hover {
    background: #65d;
    transform: scale(1.1);
  }
}

#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;

  #main {
    flex: 1;
  }
}

input, textarea {
  border-radius: 4px;
  border: 1px solid #fff;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
  font-size: 1rem;
  font-family:  "Avenir", Arial, Helvetica, sans-serif;
  margin-bottom: 15px;

  transition: all 0.3s;
}
input:hover, input:focus, textarea:hover, textarea:focus {
  outline: none;
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
  border-color: #87f;
}
</style>
