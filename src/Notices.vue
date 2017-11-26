<template>
  <div
      :style="styles"
      :class="['crip-notices', {
        [`root-${this.className}`]: !!this.className,
      }]"
  >
    <transition-group name="fade-horizontal" tag="div">
      <div
          v-for="notice in notices"
          :key="notice.name"
          class="fade-horizontal"
      >
        <notice
            :type="notice.type"
            :title="notice.title"
            :name="notice.name"
            :description="notice.description"
            :icons="icons"
            :duration="notice.duration"
            :styles="notice.styles"
            :on-close="notice.onClose"
            :class-name="notice.className"
            :closable="notice.closable"
        />
      </div>
    </transition-group>
  </div>
</template>

<script>
import Notice from "./Notice.vue"

let seed = 0
const now = Date.now()

function getUuid() {
  return "cripNotification_" + now + "_" + seed++
}

export default {
  name: "CripNotices",

  components: { Notice },

  props: {
    styles: { type: Object },
    className: { type: String },
  },

  data() {
    return {
      notices: [],
    }
  },

  methods: {
    add(notice) {
      const name = notice.uuid || getUuid()
      const defaults = { name }

      this.notices.push(Object.assign(defaults, notice))
    },

    close(name) {
      this.notices.forEach((notice, index) => {
        if (notice.name !== name) return

        this.notices.splice(index, 1)
      })
    },

    closeAll() {
      this.notices = []
    },
  },
}
</script>

<style lang="scss" scoped>
@import "./styles/styles.scss";

.crip-notices {
  width: $notice-width;
  position: fixed;
  z-index: 999990;
}

// Animations

.fade-horizontal {
  transition: all .7s ease-out;
}

.fade-horizontal-enter,
.fade-horizontal-leave-to {
  opacity: 0;
  transform: translateX(325px);
}

.fade-horizontal-leave-active {
  transition: all .7s ease-in;
  position: absolute;
  width: 100%;
}
</style>