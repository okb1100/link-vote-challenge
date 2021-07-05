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
    <Toast :options="$store.state.toast"/>
    <RouterView/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Toast from './components/Toast.vue';

export default {
  name: "App",
  components: {
    Header,
    Toast,
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
