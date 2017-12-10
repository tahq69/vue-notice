# crip-vue-notice

A Vue.js project to add global notices on a page. Take a look to [demo page](http://rawgit.com/tahq69/vue-notice/master/index.html)

![Preview](http://rawgit.com/tahq69/vue-notice/master/dist/Capture.PNG)

## Usage

### Install
```bash
> npm i -S crip-vue-notice
```

### Prerequisites

- [Font Awesome](http://fontawesome.io/): Add font awesome css to make ikons in notices visible:

```html
<head>
    ...

    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
</head>
```

### Setup
```javascript
import Vue from 'vue'
import CripNotice from 'crip-vue-notice'

// Install component in to Vue instance.
Vue.use(CripNotice)
```

### Display notification
```vue
// App.vue
<template>
  <div class="container">

    <div class="row">
      <div class="col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2">
        <button class="btn btn-default" @click="notice('open')">Normal</button>
        <button class="btn btn-default" @click="notice('error')">Error</button>
        <button class="btn btn-default" @click="notice('info')">Info</button>
        <button class="btn btn-default" @click="notice('success')">Success</button>
        <button class="btn btn-default" @click="notice('warning')">Warning</button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  methods: {
    notice (type) {
      this.$notice[type]({
        title: `Notice of ${type} type`,
        description: `Notice of ${type} type was clicked and it popped up!`
      })
    },
  },
}
</script>
```

## Build Setup

```bash
# install dependencies and serve with hot reload at localhost:8080
> npm i && npm run dev
```

## Release steps

```bash
> npm run release
```