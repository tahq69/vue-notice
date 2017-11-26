export type NoticeType = "error" | "warning" | "success" | "info" | "normal"
export type Icons = "error" | "warning" | "success" | "info" | "close"

export interface IOptions {
  className?: string
  duration?: number
  icons?: {[Key in Icons]: string}
  style?: object
}

export interface INoticeOptions {
  className?: string
  closable?: boolean
  description?: string
  duration?: number
  icons?: {[Key in Icons]: string}
  onClose?: () => void
  styles?: string
  title: string
  type?: NoticeType
  uuid?: string
}
