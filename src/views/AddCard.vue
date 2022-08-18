<template>
  <div class="main">
    <div class="wrapper">
      <Top heading="Add a new card" />
      <Card :cardInfo="cardInfo" class="TopCard" />
      <AddCardForm :cardInfo="cardInfo" />
    </div>
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
.main {
  background: #780206;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #061161, #780206);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #061161, #780206);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
.TopCard{
  background: #ccc;
}

.wrapper {
  color: white;
  width: 70%;
}

body {
  background-color: #ccc;
}
</style>