import { INoticeOptions, IOptions } from "./options"

export interface INotice {
  error(options: INoticeOptions)
  info(options: INoticeOptions)
  open(options: INoticeOptions)
  success(options: INoticeOptions)
  warning(options: INoticeOptions)

  close(uuid: string)
  config(options: IOptions)
}
