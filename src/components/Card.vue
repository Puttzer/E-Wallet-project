<template>
  <div class="card">
    <!-- space to hold card number -->
    <!-- <h1 class="card-num">{{cardnumber}}</h1> -->
    <h1 class="card-num">1234567890987654</h1>
    <ul class="owner-input">
      <li>
        <span>Cardholder Name</span>
        <p>Test Name</p>
      </li>
      <li>
        <span>Valid Thru</span>
        <p>01/22</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Card"
  // props: "cardnumber"
};
</script>

<style>
.card {
  background-color: blueviolet;
  max-width: 24rem;
  height: 14rem;
  border-radius: 0.6rem;
  /* display: grid;
  grid-template-columns: 1fr, auto;
  grid-template-rows: 1fr, auto; */
}

.card-num {
  margin: 6rem 0;
  font-size: 1.9rem;
  font-weight: 100;
  letter-spacing: 2px;
  /* grid-area: 1/1/1/2; */
}

.owner-input {
  list-style: none;
  display: flex;
  margin: 1.9rem 0;
  text-align: left;
  justify-content: space-between;
}
</style>