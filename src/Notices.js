import Notices from "./Notices.vue"

export default class NotificationWrapper {
  duration = 4.5
  style = {}
  icons = undefined

  instance

  constructor() {
    this.instance = false
  }

  create(Vue, properties) {
    if (this.instance) {
      // Remove instance if it already exists.
      this.instance.closeAll()
      setTimeout(() => {
        const element = document.getElementsByClassName("crip-notice")[0]
        document.body.removeChild(element)
      }, 500)
    }

    const defaults = {
      styles: Object.assign({}, { top: "15px", right: "15px" }, this.style),
    }
    const data = Object.assign(defaults, properties)

    const instance = new Vue({
      data,
      render: h => h(Notices, { props: data }),
    })

    const component = instance.$mount()
    document.body.appendChild(component.$el)
    this.instance = instance.$children[0]
  }

  notice(type, options) {
    const defaults = {
      type,
      title: "",
      description: "",
      onClose: () => null,
      duration: this.duration,
      closable: true,
    }

    const notice = Object.assign({}, defaults, options)

    this.instance.add(notice)
  }

  remove(name) {
    this.instance.remove(name)
  }
}
