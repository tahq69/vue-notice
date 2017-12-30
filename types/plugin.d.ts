import Vue from "vue"

export type NoticeType = "error" | "warning" | "success" | "info" | "normal"
export type NoticeIcon = "error" | "warning" | "success" | "info" | "close"
export type Install = (vue: typeof Vue, options?: INoticesOptions) => void
export type Styles = { [key: string]: string }

export interface INoticesOptions {
  className?: string
  closable?: boolean
  duration?: number
  icons?: { [Icon in NoticeIcon]: string }
  styles?: Styles
}

export interface NoticesOptions {
  className: string
  closable: boolean
  duration: number
  icons: { [Icon in NoticeIcon]: string }
  styles: Styles
}

export interface INoticeOptions {
  className?: string
  closable?: boolean
  description?: string
  duration?: number
  onClose?: () => void
  styles?: Styles
  title: string
  type?: NoticeType
  name?: string | number
}

export interface NoticeOptions {
  className: string
  closable: boolean
  description: string
  duration: number
  onClose: () => void
  styles: Styles
  title: string
  type: NoticeType
  name: string | number
}

export interface Notice {
  error(options: INoticeOptions): string
  info(options: INoticeOptions): string
  open(options: INoticeOptions): string
  success(options: INoticeOptions): string
  warning(options: INoticeOptions): string

  close(name: string): void
  config(options: INoticesOptions): NoticesOptions
}

export declare class Plugin {
  constructor(notice: INoticeOptions)
  static install: Install
  static version: string

  close(): void
}
