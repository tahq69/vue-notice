import Vue from "vue"

export type NoticeType = "error" | "warning" | "success" | "info" | "normal"

export interface IIconOptions {
  [key: NoticeType]: string
}

export interface IOptions {
  duration?: number
  icons?: IIconOptions
  style?: object
}

export interface INoticeOptions {
  className?: string
  closable?: boolean
  description?: string
  duration?: number
  icons?: IIconOptions
  onClose?: () => void
  styles?: string
  title: string
  type?: NoticeType
  uuid?: string
}

export interface INotice {
  error(options: INoticeOptions)
  info(options: INoticeOptions)
  open(options: INoticeOptions)
  success(options: INoticeOptions)
  warning(options: INoticeOptions)

  close(uuid: string)
  config(options: IOptions)
}

declare module "vue/types/vue" {
  interface Vue {
    $notice: INotice
  }

  interface VueConstructor {
    notice: INotice
  }
}

export default {
  install(VueInstance: typeof Vue, options?: IOptions),
}
