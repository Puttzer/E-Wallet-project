<template>
  <div v-on:click="$emit('change-card', cardInfo)" class="card" v-bind:class="cardInfo.vendorName">
    <div class="vendor">
      <img :src="cardInfo.chip" alt="vendor" />
      <img :src="cardInfo.vendorImage" alt="vendor" />
    </div>

    <h1>{{format}}</h1>
    <ul>
      <li>
        <p>Cardholder name</p>
        <h2>{{cardInfo.Name}}</h2>
      </li>
      <li class="validiliy">
        <p>Valid thru</p>
        <div>
          <h2>{{ cardInfo.month }}</h2>
          <h2>/</h2>
          <h2>{{ cardInfo.year }}</h2>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["cardInfo"],
  computed: {
    format() {
      console.log(this.cardInfo.cardNum.replace(/(\d{4})(?=\d)/g, "$1 "));
      return this.cardInfo.cardNum.replace(/(\d{4})(?=\d)/g, "$1 ");
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  width: 80%;
  margin: auto;
  height: 250px;
  display: flex;
  padding: 1rem;
  color: #fff;
  flex-flow: column;
  border-radius: 10px;
  justify-content: space-between;
  box-shadow: 0 0 10px rgba(#000, 0.2);
  .vendor {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &.evil {
    background-color: red;
  }
  &.ninja {
    background-color: #222;
  }
  &.blockchain {
    background-color: #8b58f9;
  }
  &.bitcoin {
    background-color: #ffae34;
  }
  h1 {
    margin: 1rem 0;
    letter-spacing: 2px;
    padding-left: 25px;
    font-size: 25px;
  }
  ul {
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: space-between;
    li {
      p {
        text-transform: uppercase;
        font-size: 15px;
      }
      &:nth-child(2) {
        text-align: right;
      }
    }

    li.validiliy {
      display: block;
      text-align: right;

      h2 {
        font-size: 15;
      }
    }
  }
}
</style> 