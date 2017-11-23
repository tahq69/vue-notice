# crip-vue-notice

A Vue.js project to add global notices on a page. Take a look to [demo page](http://rawgit.com/tahq69/vue-notice/master/index.html)

## Usage

### Install
```bash
> npm i -S crip-vue-notice
```

### Setup
```javascript
import Vue from 'vue'
import CripNotice from 'crip-vue-notice'

// Install component in to Vue instance.
Vue.use(CripNotice)
```

### Display loading bar
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
# install dependencies
> npm install

# serve with hot reload at localhost:8080
> npm run dev

# build for production with minification
> npm run build
```

## Release steps

```bash

# Build assets
> npm run build

# Commit sources to git repository
> git add -A
> git commit -m "[build] v$VERSION"

#update version number
> npm version $VERSION --message "[release] v$VERSION"

# publish
> git push
> npm publish
```