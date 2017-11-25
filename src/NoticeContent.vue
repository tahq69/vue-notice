<template>
  <div
      class="crip-notice-content"
      :class="{
        [`crip-notice-${type}`]: true,
        'crip-notice-icon': withIcon
      }"
  >
    <span
        v-if="withIcon"
        class="crip-notice-icon"
        :class="[`crip-notice-icon-${type}`]"
    >
      <i :class="[`${icons[type]}`]"></i>
    </span>

    <div class="crip-notice-title" v-html="title"></div>
    <div class="crip-notice-desc" v-html="description"></div>

    <slot/>
  </div>
</template>

<script>
const types = ["normal", "info", "success", "warning", "error"]

export default {
  name: "NoticeContent",

  props: {
    type: {
      type: String,
      required: true,
      validator: value => types.indexOf(value) > -1,
    },
    title: { type: String, required: true },
    description: { type: String },
    icons: {
      type: Object,
      default: () => ({
        info: "icon icon-info-circle",
        success: "icon icon-check-circle",
        warning: "icon icon-exclamation-circle",
        error: "icon icon-times-circle",
      }),
    },
  },

  computed: {
    withIcon() {
      return this.type !== "normal"
    },
  },
}
</script>
