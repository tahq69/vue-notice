import "./fonts/fontello.eot"
import "./fonts/fontello.svg"
import "./fonts/fontello.ttf"
import "./fonts/fontello.woff"
import "./fonts/fontello.woff2"
import "./styles/fonts.scss"
import Notices from "./Notices"

class Notice {
  constructor(Vue, options) {
    this.notices = new Notices()
    this.notices.create(Vue, {})
    this.config(options)
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

const install = (Vue, options = {}) => {
  const notice = new Notice(Vue, options)

  Vue.notice = notice

  Object.defineProperties(Vue.prototype, {
    $notice: { get: () => notice },
  })
}

export default install
