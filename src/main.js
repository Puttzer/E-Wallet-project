import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  data: () => ({
    cards: [
      {
        chip: require("./assets/chip-dark.svg"),
        vendorName: 'bitcoin',
        cardNum: "1111222233334444",
        Name: "Anders Andersson",
        vendorImage: require("./assets/vendor-bitcoin.svg"),
        month: "02",
        year: "24",
      },
      {
        chip: require("./assets/chip-light.svg"),
        vendorName: 'ninja',
        cardNum: "i836593012376591",
        Name: "SPECIMEN MCSPEZ",
        vendorImage: require("./assets/vendor-ninja.svg"),
        month: "01",
        year: "44",

      },
    ]
  }),
  mounted() {
    this.$root.$on("addcard", data => {
      this.cards.push(data);
    });
  },
  render: h => h(App)
}).$mount('#app')
