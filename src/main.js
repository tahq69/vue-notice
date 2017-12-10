import Notice from "./Notice"

export let _Vue

const install = (Vue, options = {}) => {
  // Ensure we install this component only once for required Vue instance.
  if (install.installed && _Vue === Vue) return
  install.installed = true

  _Vue = Vue

  const notice = new Notice(Vue, options)

  Vue.notice = notice

  Object.defineProperty(Vue.prototype, "$notice", { get: () => notice })
}

export default install

// Install component if is in browser and Vue instance is already available.
// This is useful for non bundle usage - if developer adds this packages bundle
// as script tag in markup.
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(install)
}
