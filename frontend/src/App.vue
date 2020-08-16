<template>
  <div id="app">
    <HeaderComponent
      v-if="$route.name != 'Login' && $route.name != '404'"
    ></HeaderComponent>
    <router-view></router-view>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
import HeaderComponent from "./components/layout/HeaderComponent";
// import HelloWorld from "./components/HelloWorld.vue";
import "@/assets/style/global.scss";

export default {
  name: "app",
  components: {
    HeaderComponent
  }
};
</script>

<style></style>
