<template>
  <div class="card-stack">
    <Card
      @change-card="$emit('change-card', card)"
      v-for="card in cards"
      :key="card.id"
      v-bind:cardInfo="card"
    />
  </div>
</template>

<script>
import Card from "./Card";
export default {
  name: "CardStack",
  data: () => ({
    cardInfo: Object
  }),
  components: { Card },
  computed: {
    cards() {
      return this.$root.$data.cards;
    }
  }
};
</script>

<style lang="scss" scoped>
.card-stack {
  display: grid;
  margin: 4rem 0 14rem;
  grid-auto-rows: 4rem;
  color: black;
}
</style>