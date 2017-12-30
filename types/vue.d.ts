import { Notice } from "./plugin"

declare module "vue/types/vue" {
  interface Vue {
    $notice: Notice
  }

  interface VueConstructor {
    notice: Notice
  }
}
