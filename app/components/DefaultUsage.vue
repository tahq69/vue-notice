<script lang="ts">
import axios from "axios"
import Vue from "vue"

import CodeSample from "./CodeSample.vue"
import ExampleSection from "./ExampleSection.vue"

export default Vue.extend({
  name: "DefaultUsage",

  components: { ExampleSection, CodeSample },

  methods: {
    async request() {
      try {
        await axios.get(`http://www.fakeresponse.com/api/?sleep=1`)
      } catch (error) {
        console.error(error)
      }
    },
  },
})
</script>

<template>
  <example-section title="Default usage">
    <div class="row">
      <div class="col-xs-12">
        <p>
          To start using component you need simply register it. Loader will inject in to axios
          interceptors and will show up while response is not received. Press "Create
          request" button to call fakeresponse with axios.
        </p>

        <button class="btn btn-primary"
                @click="request">
          Create request
        </button>
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
