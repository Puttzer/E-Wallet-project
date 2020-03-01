<template>
  <div>
    <h1>{{heading}}</h1>
  </div>
</template>

<script>
export default {
  name: "Top",
  props: ["heading"]
};
</script>

<style lang="scss" scoped>
h1 {
  margin: 2rem 0;
  text-align: center;
  font-family: "Fira Code";
  text-transform: uppercase;
}
