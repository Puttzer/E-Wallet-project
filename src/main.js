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
        chip: require("./assets/chip-light.svg"),
        vendor: require("./assets/vendor-blockchain.svg"),
        cardNum: "1111 2222 3333 4444",
        Name: "Anders Andersson",
        vaildThru: "01/22",
        bgColor: "#87240F"
      },
      {
        id: 2,
        chip: require("./assets/chip-light.svg"),
        vendor: require("./assets/vendor-blockchain.svg"),
        cardNum: "1111 2222 3333 4444",
        Name: "Anders Andersson",
        vaildThru: "02/22",
        bgColor: "#0F1F87"
      },
    ]
  }),
  render: h => h(App)
}).$mount('#app')
