import Vue from "vue"
import notice from "./main"
import App from "./Example.vue"

Vue.use(notice, {
  duration: 4.5,
  style: { top: "65px", bottom: "1px" },
  className: "notices",
})

new Vue({
  el: "#app",
  render: h => h(App),
})
