<template>
  <div class="addcard">
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
    <H1>THIS IS ADDCARD PAGE</H1>

    <router-view />
  </div>
</template>



<script>
// import Card from "../components/Card";
// import Top from "../components/Top";
// import CardStack from "../components/CardStack";
export default {
  name: "AddCard"
};
</script>

<style>
h1 {
  font-family: "Fira Code";
}
a {
  font-family: "Fira Code";
  text-decoration: none;
  font-size: 34px;
}
</style>