import Notices from "./Notices"

export default class Notice {
  version = "__VERSION__"

  constructor(Vue, options) {
    this.notices = new Notices()
    this.config(options)
    this.notices.create(Vue, options)
  }

  open(options, type = "normal") {
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
    if (options.style) {
      this.notices.style = options.style
    }

    if (options.duration) {
      this.notices.duration = options.duration
    }

    if (options.icons) {
      this.notices.icons = Object.assign({}, this.notices.icons, options.icons)
    }
  }

  close(noticeName) {
    if (noticeName) {
      this.notices.remove(noticeName)
    } else return false
  }
}
