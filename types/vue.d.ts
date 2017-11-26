import { INotice } from "./notice"

declare module "vue/types/vue" {
  interface Vue {
    $notice: INotice
  }

  interface VueConstructor {
    notice: INotice
  }
}
