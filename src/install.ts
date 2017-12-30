import Vue from "vue"

import { INoticesOptions, NoticesOptions } from "$/plugin"
import notice from "./notice"
import defaults from "./settings"

let installed = false
let privateVue: any

export default function install(vue: typeof Vue, options?: INoticesOptions): void {
  if (installed && privateVue === vue) return

  installed = true
  privateVue = vue

  const settings = Object.assign({}, defaults, options)
  notice.config(settings)

  Object.defineProperty(Vue, "notice", { get: () => notice })
  Object.defineProperty(Vue.prototype, "$notice", { get: () => notice })
}
