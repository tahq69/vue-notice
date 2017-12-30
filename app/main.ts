import Vue from "vue"

import "./assets/styles.scss"

import CripNotice from "@/main"
import App from "./components/Docs.vue"

Vue.use(CripNotice)

import router from "./router"

const app = new Vue({
  render: h => h(App),
  router,
})

app.$mount(document.getElementById("app") || undefined)
