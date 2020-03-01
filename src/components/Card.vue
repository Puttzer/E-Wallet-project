<template>
  <div
    v-on:click="$emit('change-card', cardInfo)"
    class="card"
    :style="{'background-color':cardInfo.bgColor}"
  >
    <div class="vendor">
      <img :src="cardInfo.chip" alt="vendor" />
      <img :src="cardInfo.vendor" alt="vendor" />
    </div>

    <h1>{{cardInfo.cardNum}}</h1>
    <ul>
      <li>
        <p>Cardholder name</p>
        <h2>{{cardInfo.Name}}</h2>
      </li>
      <li>
        <p>Valid thru</p>
        <h2>{{cardInfo.vaildThru}}</h2>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["cardInfo"]
};
</script>

<style lang="scss" scoped>
.card {
  width: 80%;
  z-index: 1;
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
  h1 {
    margin: 1rem 0;
    letter-spacing: 2px;
  }
  ul {
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: space-between;
    li {
      p {
        text-transform: uppercase;
      }
      &:nth-child(2) {
        text-align: right;
      }
    }
  }
}
</style> 