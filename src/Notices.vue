<template>
  <div :class="classes" :style="styles">
    <transition-group name="fade-horizontal" tag="div">
      <notice
          v-for="notice in notices"
          :key="notice.name"
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
          class="fade-horizontal-item"
      />
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
  name: "Notification",

  components: { Notice },

  props: {
    styles: { type: Object, default: () => ({ top: "65px", left: "50%" }) },
    content: { type: String },
    className: { type: String },
  },

  data() {
    return {
      notices: [],
    }
  },

  computed: {
    classes() {
      return ["crip-notice", { [`root-${this.className}`]: !!this.className }]
    },
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

<style lang="scss">
@import "./styles/styles.scss";

.fade-horizontal-item,
.fade-horizontal-move {
  transition: all 0.75s ease-out;
}

.fade-horizontal-enter,
.fade-horizontal-leave-to {
  opacity: 0;
  transform: translateX(325px);
}

.fade-horizontal-leave-active {
  transition: all 0.75s ease-in;
  position: absolute;
  width: 100%;
}
</style>