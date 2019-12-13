<template>
  <div id="app" class="flex flex-row justify-center pt-8">
    <PaintCanvas msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import PaintCanvas from "./components/PaintCanvas/PaintCanvas.vue";

export default {
  name: "app",
  components: {
    PaintCanvas
  }
};
</script>

<style src="./assets/tailwind.css">
<style > #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
