import Vue from "vue"

import { INoticeOptions, NoticeOptions, NoticesOptions } from "$/plugin"
import NoticesComponent from "./components/Notices.vue"

interface NoticesComponentType {
  add(notice: NoticeOptions): void
  removeAll(): void
  remove(name: string): void
}

let seed = 0

function getUuid() {
  return `crip-${Date.now()}-${++seed}`
}

export default class Notices {
  private component: object & Record<never, any> & Vue
  private instance: NoticesComponentType
  private options: NoticesOptions

  constructor(options: NoticesOptions) {
    this.options = options
    this.component = new Vue({
      render: h => h(NoticesComponent, { props: this.options }),
    })

    const component = this.component.$mount()
    document.body.appendChild(component.$el)
    this.instance = this.component.$children[0] as any
  }

  public get noticeDefaults(): INoticeOptions {
    return {
      closable: this.options.closable,
      duration: this.options.duration,
      title: "",
    }
  }

  public push(notice: NoticeOptions): string {
    notice.name = notice.name || getUuid()
    this.instance.add(notice)

    return notice.name.toString()
  }

  public remove(name: string): void {
    this.instance.remove(name)
  }

  public configure(options: NoticesOptions) {
    Object.assign(this.options, options)
    this.component.$forceUpdate()
  }
}
