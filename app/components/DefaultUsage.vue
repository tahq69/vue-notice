<script lang="ts">
import Vue from "vue"

import CripNotice from "@/main"
import CodeSample from "./CodeSample.vue"
import ExampleSection from "./ExampleSection.vue"

interface IData {
  notice: CripNotice | null
}

export default Vue.extend({
  name: "DefaultUsage",

  components: { ExampleSection, CodeSample },

  data(): IData {
    return {
      notice: null,
    }
  },

  methods: {
    normal() {
      this.notice = new CripNotice({
        title: "Normal notice",
        description:
          "This notification has a class 'open-normal' and duration " +
          "in 20 seconds. So you can use button close to discard it.",
        className: "open-normal",
        duration: 20,
      })
    },

    close() {
      if (this.notice !== null) this.notice.close()
    },

    error() {
      this.$notice.error({
        title: "Error notice",
        description: "Some error description goes here",
      })
    },

    info() {
      this.$notice.info({
        title: "Informational notice",
        description: "This notification has no close button",
        closable: false,
      })
    },

    success() {
      this.$notice.success({
        title: "Success notice",
        description: "When this notice will be closed, in console will appear record",
        onClose() {
          // tslint:disable-next-line:no-console
          console.log("Success notice now is closed")
        },
      })
    },

    warning() {
      this.$notice.warning({
        title: "Warning notice",
        description: "This notice should be 500px wide",
        styles: { width: "500px", marginLeft: "-175px" },
      })
    },
  },
})
</script>

<template>
  <example-section title="Default usage">
    <div class="row">
      <div class="col-xs-12">
        <p>
          To start using component you need simply register it. Notification instance become
          available inside vue instances and ready to use.
        </p>

        <button class="btn btn-default"
                @click="normal()">Normal</button>

        <button class="btn btn-default"
                @click="close()">Close Normal</button>

        <button class="btn btn-danger"
                @click="error()">Error</button>

        <button class="btn btn-info"
                @click="info()">Info</button>

        <button class="btn btn-success"
                @click="success()">Success</button>

        <button class="btn btn-warning"
                @click="warning()">Warning</button>
      </div>
    </div>

    <code-sample>
      import Vue from "vue"
      import CripNotice from "crip-vue-notice"

      Vue.use(CripNotice)

      Vue.extend({
        methods: {
          normal() {
            this.$notice.open({
              title: "Notice title",
              description: "Description under title"
            })
          },

          error() {
            this.$notice.error({
              title: "Notice title",
              description: "Description under title"
            })
          },

          info() {
            this.$notice.info({
              title: "Notice title",
              description: "Description under title"
            })
          },

          success() {
            this.$notice.success({
              title: "Notice title",
              description: "Description under title"
            })
          },

          warning() {
            this.$notice.warning({
              title: "Notice title",
              description: "Description under title"
            })
          }
        }
      })
    </code-sample>
  </example-section>
</template>
