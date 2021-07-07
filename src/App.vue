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
    <Toast :content="toast.content" :visible="toast.visible" :type="toast.type"/>
    <RouterView/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from "./components/Header.vue";
import Toast from './components/Toast.vue';

export default {
  name: "App",
  components: {
    Header,
    Toast,
  },
  computed: {
    ...mapGetters(["toast"]),
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
