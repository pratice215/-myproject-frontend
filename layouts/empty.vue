<template>
  <nuxt />
</template>

<script>
import { urlRoot } from '~/helpers'

export default {
  head () {
    const canonicalURL = `${urlRoot}${this.$route.fullPath}`.split('?')[0].split('#')[0]
    const link = [{
      hid: 'canonical',
      rel: 'canonical',
      href: canonicalURL
    }]
    return { link }
  }
}
</script>
