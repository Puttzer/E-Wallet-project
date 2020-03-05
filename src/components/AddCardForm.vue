<template>
  <form @submit.prevent="addCard">
    <label for="cardNumber">Card Number:</label>
    <input
      id="cardNumber"
      v-model="cardInfo.cardNum"
      type="text"
      maxlength="16"
      placeholder="Input Cardnumber"
    />

    <br />
    <label for="Name">Cardholder Name:</label>
    <input type="text" id="name" v-model="cardInfo.Name" placeholder="Input Full name" />

    <div>
      <div class="valid">
        <h4>Valid Thru</h4>
        <label for="month">Month</label>
        <select v-model="cardInfo.month" id="month">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>

        <label for="year">Year</label>
        <select v-model="cardInfo.year" id="year">
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
        </select>
      </div>
    </div>

    <label for="vendor">Vendor</label>
    <select
      id="vendor"
      v-model="cardInfo.vendorName"
      @change="$emit('select', cardInfo.vendorName)"
    >
      <option value="bitcoin">Bitcoin Inc</option>
      <option value="blockchain">Blockchain Inc</option>
      <option value="evil">Evil Corp</option>
      <option value="ninja">Ninja Bank</option>
    </select>
    <button class="btn-primary">Add card</button>
  </form>
</template>

<script>
export default {
  props: {
    cardInfo: Object
  },
  methods: {
    addCard() {
      this.$root.$emit("addcard", this.cardInfo);
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
form {
  width: 80%;
  margin: 4rem auto;
  label {
    display: block;
    margin: 2rem 0 0.5rem 0;
    text-transform: uppercase;
  }

  div {
    display: flex;
    justify-content: space-between;

    select {
      width: 190px;
    }

    div {
      display: flex;
      flex-flow: column;
    }
  }
  input,
  select,
  button {
    width: 100%;
    padding: 12px;
    border-radius: 5px;
    border: 1px solid #ccc;

    button {
      padding: 20px;
      cursor: pointer;
      margin-top: 1rem;
      background: #fff;
    }
  }
}
</style>