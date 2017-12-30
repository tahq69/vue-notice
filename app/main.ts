import Vue from "vue"

import "./assets/styles.scss"

import { INoticesOptions } from "$/plugin"
import CripNotice from "@/main"
import App from "./components/Docs.vue"

Vue.use<INoticesOptions>(CripNotice, {
  className: "x-notices",
  duration: 3,
  styles: { top: "60px", right: "15px" },
})

import router from "./router"

const app = new Vue({
  render: h => h(App),
  router,
})

app.$mount(document.getElementById("app") || undefined)
