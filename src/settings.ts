import { NoticeOptions, NoticesOptions } from "$/plugin"

export default {
  className: "",
  closable: true,
  duration: 4.5,
  icons: {
    close: "fa fa-times",
    error: "fa fa-times-circle",
    info: "fa fa-info-circle",
    success: "fa fa-check-circle",
    warning: "fa fa-exclamation-circle",
  },
  styles: { top: "15px", right: "15px" },
} as NoticesOptions

export const noticeSettings: NoticeOptions = {
  className: "",
  closable: true,
  description: "",
  duration: 4.5,
  name: "",
  onClose: () => null,
  styles: {},
  title: "",
  type: "normal",
}
