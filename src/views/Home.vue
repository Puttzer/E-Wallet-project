<template>
  <div class="app">
    <div id="nav">
      <router-link to="/addcard">AddCard</router-link>
      <router-view />
    </div>
    <Card />
  </div>
</template>

<script>
import Card from "../components/Card";
export default {
  name: "Home",
  components: {
    Card
  }
};
</script>
<style lang="scss" scoped>
</style>