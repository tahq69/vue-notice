export type NoticeType = "error" | "warning" | "success" | "info" | "normal"

export interface IOptions {
  duration?: number
  icons?: {[Key in NoticeType]: string}
  style?: object
}

export interface INoticeOptions {
  className?: string
  closable?: boolean
  description?: string
  duration?: number
  icons?: {[Key in NoticeType]: string}
  onClose?: () => void
  styles?: string
  title: string
  type?: NoticeType
  uuid?: string
}
