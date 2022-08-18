<template>
  <div class="main">
    <div class="wrapper">
      <Top heading="E-wallet" />
      <h2>Active card</h2>
      <Card class="TopCard" :cardInfo="card" />
      <CardStack :cards="activeCard" @change-card="ChangeCard" />
      <router-link to="/addcard">Add new card</router-link>
    </div>
  </div>

</template>

<script>
import Card from "../components/Card";
import Top from "../components/Top";
import CardStack from "../components/CardStack";
export default {
  name: "Home",
  components: { Top, Card, CardStack },

  data() {
    return {
      card: this.$root.cards[0]
    };
  },

  computed: {
    activeCard() {
      return this.$root.$data.cards[this.activeCardIndex];
    }
  },
  methods: {
    ChangeCard(data) {
      this.card = data;
    }
  }
};
</script>

<style lang="scss" >
.main {
  background: #780206;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #061161, #780206);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #061161, #780206);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}

.wrapper {
  width: 100%;
  margin: auto;
  padding: 2rem;
  max-width: 560px;
  h1{
    color: white;
  }

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
    color: white;
    display: block;
    font-weight: bold;
    font-size: 1.3rem;
    border-radius: 5px;
    text-align: center;
    text-decoration: none;
    border: 2px solid white;
    text-transform: uppercase;

    &:hover {
      color: rgb(2, 171, 90);
      border: 2px solid rgb(2, 171, 90);
      
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