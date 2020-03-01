<template>
  <div class="card-stack">
    <Card
      @change-card="$emit('change-card', card)"
      v-for="card in cards"
      :key="card.id"
      :cardInfo="card"
      class="card-item"
    />
  </div>
</template>

<script>
import Card from "./Card";
export default {
  name: "CardStack",
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
}
</style>