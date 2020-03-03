<template>
  <div class="wrapper">
    <Top heading="E-wallet" />
    <h2>Active card</h2>
    <Card :cardInfo="cardInfo" />
    <CardStack @change-card="ChangeCard" />
    <router-link to="/addcard">Add new card</router-link>
  </div>
</template>

<script>
import Card from "../components/Card";
import Top from "../components/Top";
import CardStack from "../components/CardStack";
export default {
  name: "Home",
  components: { Top, Card, CardStack },

  data: () => ({
    cardInfo: {
      id: Date.now(),
      chip: require("../assets/chip-dark.svg"),
      vendorImage: require("../assets/vendor-bitcoin.svg"),
      cardNum: "",
      Name: "",
      vaildThru: "01/22"
    }
  }),
  methods: {
    ChangeCard(data) {
      this.cardInfo = data;
    }
  }
};
</script>

<style lang="scss" >
.wrapper {
  width: 100%;
  margin: auto;
  padding: 2rem;
  max-width: 560px;

  // font-family: "Fira Code";  DOES NOT FORMAT CORRECTLY TO DOCUMENT CHANGE OR REMOVE!
  h2 {
    color: #999;
    font-size: 0.8rem;
    text-align: center;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }
  a {
    width: 80%;
    margin: auto;
    padding: 20px;
    color: #000;
    display: block;
    font-weight: bold;
    font-size: 1.3rem;
    border-radius: 5px;
    text-align: center;
    text-decoration: none;
    border: 2px solid #000;
    text-transform: uppercase;
    &:hover {
      color: #fff;
      background: #000;
    }
  }
}

.btn-primary {
  width: 80%;
  margin: auto;
  padding: 20px;
  color: #000;
  display: block;
  transition: 0.3s;
  font-weight: bold;
  font-size: 1.3rem;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  border: 2px solid #000;
  text-transform: uppercase;

  &:hover {
    color: #fff;
    background: #000;
  }
}
</style>