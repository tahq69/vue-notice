import { INoticeOptions, Install, Plugin } from "$/plugin"
import install from "./install"
import notice from "./notice"

export default class CripVueNotice implements Plugin {
  public static install: Install
  public static version: string

  private name: string

  constructor(options: INoticeOptions) {
    this.name = notice.open(options)
  }

  public close() {
    notice.close(this.name)
  }
}

CripVueNotice.install = install
CripVueNotice.version = "__VERSION__"
