import Vue from "vue"
import notice from "./main"
import App from "./Example.vue"

Vue.use(notice, { duration: 4.5 })

new Vue({
  el: "#app",
  render: h => h(App),
})
