<template>
  <div class="wrapper">
    <Top heading="Add a new card" />
    <Card :cardInfo="cardInfo" />

    <AddCardForm @select="SelectBg" :cardInfo="cardInfo" />
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
  }),

  methods: {
    SelectBg(vendor) {
      this.cardInfo.vendorName = vendor;
      this.cardInfo.vendorImage = require(`../assets/vendor-${vendor}.svg`);
    }
  }
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