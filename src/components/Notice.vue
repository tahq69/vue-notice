<script lang="ts">
import Vue from "vue"

import NoticeContent from "./NoticeContent.vue"

const types = ["normal", "info", "success", "warning", "error"]

export default Vue.extend({
  name: "CripNotice",

  components: { NoticeContent },

  props: {
    type: {
      type: String,
      required: true,
      validator: (value: string) => types.indexOf(value) > -1,
    },
    className: { type: String },
    closable: { type: Boolean, required: true },
    description: { type: String },
    duration: { type: Number, required: true },
    icons: { type: Object, required: true },
    name: { type: String, required: true },
    onClose: { type: Function },
    styles: { type: Object, default: () => ({}) },
    title: { type: String, required: true },
  },

  computed: {
    withDesc(): boolean {
      return !!this.description
    },
  },

  data() {
    return {
      closeTimer: 0,
    }
  },

  methods: {
    setCloseTimer() {
      if (this.duration !== 0) {
        this.closeTimer = window.setTimeout(() => {
          this.close()
        }, this.duration * 1000)
      }
    },

    clearCloseTimer() {
      if (this.closeTimer) {
        clearTimeout(this.closeTimer)
        this.closeTimer = 0
      }
    },

    close() {
      this.onClose()
      this.clearCloseTimer()
      const parent = this.$parent.$parent as any
      parent.remove(this.name)
    },
  },

  mounted() {
    this.clearCloseTimer()
    this.setCloseTimer()
  },

  beforeDestroy() {
    this.clearCloseTimer()
  },
})
</script>

<template>
  <div :class="{
          [`crip-notice-${type}`]: true,
          [className]: !!className,
          'crip-notice-closable': closable,
          'crip-notice-with-desc': withDesc,
        }"
       :style="styles"
       class="crip-notice"
       @mousemove="clearCloseTimer"
       @mouseover="clearCloseTimer"
       @mouseout="setCloseTimer">
    <notice-content :type="type"
                    :title="title"
                    :description="description"
                    :icons="icons">
      <a href="#"
         v-if="closable"
         class="crip-notice-close"
         @click.prevent="close">
        <i :class="icons.close"></i>
      </a>
    </notice-content>
  </div>
</template>

<style lang="scss" scoped>
@import "./../assets/styles.scss";

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

