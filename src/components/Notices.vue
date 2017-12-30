<script lang="ts">
import Vue from "vue"

import { NoticeOptions } from "$/plugin"
import Notice from "./Notice.vue"

interface IData {
  notices: NoticeOptions[]
}

export default Vue.extend({
  name: "CripNotices",

  components: { Notice },

  props: {
    className: { type: String },
    icons: { type: Object },
    styles: { type: Object },
  },

  data(): IData {
    return {
      notices: [],
    }
  },

  methods: {
    add(notice: NoticeOptions) {
      this.notices.push(notice)
    },

    remove(name: string) {
      this.notices.forEach((notice, index) => {
        if (notice.name !== name) return

        this.notices.splice(index, 1)
      })
    },

    removeAll() {
      this.notices = []
    },
  },
})
</script>

<template>
  <div :style="styles"
       :class="{
         [`crip-notices`]: true,
         [className]: !!className,
       }">
    <transition-group name="fade-horizontal"
                      tag="div">
      <div v-for="notice in notices"
           :key="notice.name"
           class="fade-horizontal">
        <notice :type="notice.type"
                :title="notice.title"
                :name="notice.name"
                :description="notice.description"
                :icons="icons"
                :duration="notice.duration"
                :styles="notice.styles"
                :on-close="notice.onClose"
                :class-name="notice.className"
                :closable="notice.closable" />
      </div>
    </transition-group>
  </div>
</template>

<style lang="scss" scoped>
@import "./../assets/styles.scss";

.crip-notices {
  width: $notice-width;
  position: fixed;
  z-index: 999990;
}

// Animations

.fade-horizontal {
  transition: all 0.7s ease-out;
}

.fade-horizontal-enter,
.fade-horizontal-leave-to {
  opacity: 0;
  transform: translateX(325px);
}

.fade-horizontal-leave-active {
  transition: all 0.7s ease-in;
  position: absolute;
  width: 100%;
}
</style>