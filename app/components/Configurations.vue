<script lang="ts">
import Vue from "vue"

import CodeSample from "./CodeSample.vue"
import ExampleSection from "./ExampleSection.vue"

export default Vue.extend({
  name: "Configurations",

  components: { ExampleSection, CodeSample },

  methods: {},
})
</script>

<template>
  <example-section title="Configurations">
    <div class="row">
      <div class="col-xs-12">
        <p>
          Some configurations may be configured on component installation phase and be overwritten
          for each notice separately. More details in sample comments below.
        </p>
      </div>
    </div>

    <code-sample>
      import Vue from "vue"
      import CripNotice from "crip-vue-notice"

      Vue.use(CripNotice, {
        // You can set default duration for all notices on init.
        duration: 4.5,

        // Style of notices wrapper where will appear notices. 
        styles: { top: "15px", right: "15px" },

        // You may add custom class for wrapper to define own styles. 
        className: "notices",

        // Font awesome icon class definitions for all notice types.
        icons: {
          info: "fa fa-info-circle",
          success: "fa fa-check-circle",
          warning: "fa fa-exclamation-circle",
          error: "fa fa-times-circle",
          close: "fa fa-times",
        }
      })

      Vue.extend({
        mounted() {
          this.notice = new CripNotice({
            // Unique name to be able close it programmatically.
            name: "unique-notice-name"

            // Notice title.
            title: "Notice title",

            // Notice description.
            description: "Description under title",

            // Callback to react on notice close action.
            onClose: () => console.log("notice now is closed"),

            // Custom styles for current notice.
            styles: { padding: "5px;" },

            // Custom duration of current notice.
            duration: 4.5,

            // Enables close icon for notice.
            closable: true,

            // Type of the notice: "error" | "warning" | "success" | "info" | "normal"
            type: "normal"
          })
        },

        methods: {
          close() {
            this.notice.close()
            // or this.$notice.close("unique-notice-name")
          }
        }
      })
    </code-sample>
  </example-section>
</template>
