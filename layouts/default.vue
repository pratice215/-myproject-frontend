<template>
  <app-layout>
    <template #header>
      <app-header />
    </template>
    <nuxt />
    <template #footer>
      <app-footer />
    </template>
  </app-layout>
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
