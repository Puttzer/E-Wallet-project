import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  data: () => ({
    cards: [
      {
        id: 1,
        chip: require("./assets/chip-dark.svg"),
        vendorName: 'bitcoin',
        cardNum: "1111222233334444",
        Name: "Anders Andersson",
        vendorImage: require("./assets/vendor-bitcoin.svg"),
        month: "02",
        year: "24",
      },
      {
        id: 2,
        chip: require("./assets/chip-dark.svg"),
        vendorName: 'evil',
        cardNum: "1111 2222 3333 4444",
        Name: "Anders Andersson",
        vendorImage: require("./assets/vendor-evil.svg"),
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
