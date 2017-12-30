import { INoticeOptions, INoticesOptions, Notice, NoticesOptions, NoticeType } from "$/plugin"
import Notices from "./Notices"
import settings, { noticeSettings } from "./settings"

const notices = new Notices(settings)

const show = (options: INoticeOptions, type: NoticeType): string => {
  // Only open method may open notice of any type.
  if (type !== "normal") options.type = type

  // Configuration contains defaults, if no settings provided. Notice defaults
  // may partially overwrite with notices settings and maximum priority is for
  // provided options for notice options.
  const conf = Object.assign({}, noticeSettings, notices.noticeDefaults, options)

  return notices.push(conf)
}

const notice: Notice = {
  error(options: INoticeOptions): string {
    return show(options, "error")
  },

  info(options: INoticeOptions): string {
    return show(options, "info")
  },

  open(options: INoticeOptions): string {
    return show(options, "normal")
  },

  success(options: INoticeOptions): string {
    return show(options, "success")
  },

  warning(options: INoticeOptions): string {
    return show(options, "warning")
  },

  close(name: string): void {
    notices.remove(name)
  },

  config(options: INoticesOptions): NoticesOptions {
    const conf = Object.assign({}, settings, options)
    notices.configure(conf)

    return conf
  },
}

export default notice
