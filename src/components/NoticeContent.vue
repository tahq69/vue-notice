<script lang="ts">
import Vue from "vue"

const types = ["normal", "info", "success", "warning", "error"]

export default Vue.extend({
  name: "CripNoticeContent",

  props: {
    description: { type: String },
    icons: { type: Object },
    title: { type: String, required: true },
    type: { type: String, required: true },
  },

  computed: {
    withIcon(): boolean {
      return this.type !== "normal"
    },

    withDesc(): boolean {
      return !!this.description
    },
  },
})
</script>

<template>
  <div class="crip-notice-content"
       :class="{
         'crip-notice-with-icon': withIcon,
         'crip-notice-with-desc': withDesc,
       }">
    <span v-if="withIcon"
          class="crip-notice-icon"
          :class="[`crip-notice-icon-${type}`]">
      <i :class="[`${icons[type]}`]"></i>
    </span>

    <div class="crip-notice-title"
         v-html="title"></div>
    <div class="crip-notice-desc"
         v-html="description"></div>

    <slot/>
  </div>
</template>

<style lang="scss" soped>
@import "./../assets/styles.scss";

.crip-notice-content {
  &.crip-notice-with-desc {
    .crip-notice-title {
      font-weight: bold;
      margin-bottom: 8px;
    }

    .crip-notice-icon {
      font-size: 36px;
    }
  }

  &.crip-notice-with-icon {
    .crip-notice-title,
    .crip-notice-desc {
      margin-left: 22px;
    }

    &.crip-notice-with-desc {
      .crip-notice-title,
      .crip-notice-desc {
        margin-left: 51px;
      }
    }
  }

  .crip-notice-icon {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 16px;

    &-success {
      color: $success-color;
    }

    &-info {
      color: $primary-color;
    }

    &-warning {
      color: $warning-color;
    }

    &-error {
      color: $danger-color;
    }
  }

  .crip-notice-title {
    font-size: $font-size-base;
    color: $title-color;
    padding-right: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .crip-notice-desc {
    font-size: 12px;
    color: $text-color;
    text-align: justify;
    line-height: 1.5;
  }
}
</style>

