<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2">
        <h1>Notifications</h1>

        <h2>Simple Notices</h2>

        <button class="btn btn-default" @click="notice('open')">Normal</button>
        <button class="btn btn-danger" @click="notice('error')">Error</button>
        <button class="btn btn-info" @click="notice('info')">Info</button>
        <button class="btn btn-success" @click="notice('success')">Success</button>
        <button class="btn btn-warning" @click="notice('warning')">Warning</button>

        <h2>Notifications with descriptions</h2>

        <button class="btn btn-default" @click="notice('open', true)">Normal</button>
        <button class="btn btn-danger" @click="notice('error', true)">Error</button>
        <button class="btn btn-info" @click="notice('info', true)">Info</button>
        <button class="btn btn-success" @click="notice('success', true)">Success</button>
        <button class="btn btn-warning" @click="notice('warning', true)">Warning</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    notice(type, includeDescription = false) {
      const title = `Notice of ${type} type`
      const description = `Notice of ${type} type was clicked and it popped up!`
      const content = includeDescription ? { title, description } : { title }

      this.$notice[type](content)
    },
  },
}
</script>