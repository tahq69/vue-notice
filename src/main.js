import Notices from "./Notices"

class Notice {
  constructor() {
    this.notices = new Notices()
    this.notices.create({})
  }

  open(options) {
    return this.notices.notice("normal", options)
  }

  info(options) {
    return this.notices.notice("info", options)
  }

  success(options) {
    return this.notices.notice("success", options)
  }
  warning(options) {
    return this.notices.notice("warning", options)
  }

  error(options) {
    return this.notices.notice("error", options)
  }

  config(options) {
    if (options.top) {
      this.notices.top = options.top
    }

    if (options.duration) {
      this.notices.duration = options.duration
    }

    if (options.icons) {
      this.notices.icons = Object.assign(
        {},
        this.notices.icons,
        options.icons,
      )
    }
  }

  close(noticeName) {
    if (noticeName) {
      this.notices.remove(noticeName)
    } else return false
  }
}

export const notice = new Notice()

export default {
  install(Vue, options) {
    if (options) {
      notice.config(options)
    }

    Vue.prototype.$notice = notice
  },
}
