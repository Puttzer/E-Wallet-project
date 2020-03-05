<template>
  <div class="wrapper">
    <Top heading="Add a new card" />
    <Card :cardInfo="cardInfo" class="TopCard" />

    <AddCardForm :cardInfo="cardInfo" />
  </div>
</template>



<script>
import Card from "../components/Card";
import Top from "../components/Top";
import AddCardForm from "../components/AddCardForm";
export default {
  name: "AddCard",
  components: { Top, Card, AddCardForm },

  data: () => ({
    cardInfo: {
      // Default
      chip: require("../assets/chip-light.svg"),
      vendorImage: require("../assets/vendor-bitcoin.svg"),
      cardNum: "",
      Name: "",
      month: "",
      year: "",
      vendorName: null
    }
  })
};
</script>

<style>
.wrapper {
  width: 70%;
}
body {
  background-color: #ccc;
}
</style>