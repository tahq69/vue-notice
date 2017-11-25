<template>
  <div
      :class="classes"
      :style="styles" 
      @mousemove="clearCloseTimer"
      @mouseover="clearCloseTimer"
      @mouseout="setCloseTimer"
  >
    <notice-content
        :type="type"
        :title="title"
        :description="description"
        :icons="icons"
    >
      <a
          href="#"
          v-if="closable"
          class="crip-notice-close"
          @click.prevent="close"
      >
        <i class="icon-times"></i>
      </a>
    </notice-content>
  </div>
</template>

<script>
import NoticeContent from "./NoticeContent.vue"

const types = ["normal", "info", "success", "warning", "error"]

export default {
  name: "Notice",

  components: { NoticeContent },

  props: {
    type: {
      type: String,
      required: true,
      validator: value => types.indexOf(value) > -1,
    },
    title: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    icons: { type: Object },

    duration: { type: Number, default: () => 1.5 },
    styles: { type: Object, default: () => ({ right: "50%" }) },
    closable: { type: Boolean, default: () => false },
    className: { type: String },
    onClose: { type: Function },
  },

  data() {
    return {
      withDesc: false,
    }
  },

  computed: {
    classes() {
      return {
        [this.className]: !!this.className,
        "crip-notice-closable": this.closable,
        "crip-notice-with-desc": this.withDesc,
      }
    },
  },

  methods: {
    setCloseTimer() {
      if (this.duration !== 0) {
        this.closeTimer = setTimeout(() => {
          this.close()
        }, this.duration * 1000)
      }
    },

    clearCloseTimer() {
      if (this.closeTimer) {
        clearTimeout(this.closeTimer)
        this.closeTimer = null
      }
    },

    close() {
      //this.clearCloseTimer()
      //this.onClose()
      //this.$parent.$parent.close(this.name)
    },
  },

  mounted() {
    this.clearCloseTimer()
    this.setCloseTimer()
  },

  beforeDestroy() {
    this.clearCloseTimer()
  },
}
</script>

<style scoped>
body {
  background-color: gray;
}
</style>

