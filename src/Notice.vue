<template>
  <div
      :class="[`crip-notice-${type}`, {
        [className]: !!className,
        'crip-notice-closable': closable,
        'crip-notice-with-desc': withDesc,
      }]"
      :style="styles"
      class="crip-notice"
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
        <i :class="icons.close"></i>
      </a>
    </notice-content>
  </div>
</template>

<script>
import NoticeContent from "./NoticeContent.vue"

const types = ["normal", "info", "success", "warning", "error"]

export default {
  name: "CripNotice",

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
    icons: {
      type: Object,
      default: () => ({
        info: "fa fa-info-circle",
        success: "fa fa-check-circle",
        warning: "fa fa-exclamation-circle",
        error: "fa fa-times-circle",
        close: "fa fa-times",
      }),
    },

    duration: { type: Number, default: () => 1.5 },
    styles: { type: Object, default: () => ({}) },
    closable: { type: Boolean, default: () => false },
    className: { type: String },
    onClose: { type: Function },
  },

  computed: {
    withDesc() {
      return !!this.description
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
      this.clearCloseTimer()
      this.onClose()
      this.$parent.$parent.close(this.name)
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

<style lang="scss" scoped>
@import "./styles/styles.scss";

.crip-notice {
  margin-bottom: $notice-margin-bottom;
  padding: $notice-padding;
  border-radius: $border-radius-small;
  box-shadow: $shadow-base;
  background: #fff;
  line-height: 1;
  position: relative;
  overflow: hidden;

  &:after {
    content: "";
    display: block;
    width: 4px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
  }

  &-normal:after {
    background: $primary-color;
  }

  &-info:after {
    background: $primary-color;
  }

  &-success:after {
    background: $success-color;
  }

  &-warning:after {
    background: $warning-color;
  }

  &-error:after {
    background: $danger-color;
  }

  &-close {
    position: absolute;
    right: 16px;
    top: 15px;
    color: #999;
    outline: none;

    i {
      @include close-base(-3px);
    }
  }

  &-with-desc .crip-notice-close {
    top: 11px;
  }
}
</style>

