<template>
  <div id="app">
     <Header>
      <template v-slot:brand>
        <span>Digitastic<strong>.Plus</strong></span>
      </template>
      <template v-slot:title>
        <span>Link<strong>Vote</strong> Challenge</span>
      </template>
    </Header>
    <router-view/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
