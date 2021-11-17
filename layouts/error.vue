<template>
  <app-layout>
    <template #header>
      <app-header />
    </template>
    <v-container class="sm a-center error-page">
      <h1 v-if="error.statusCode === 404">
        {{ pageNotFound }}
      </h1>
      <h1 v-else>
        {{ otherError }}
      </h1>
    </v-container>
    <template #footer>
      <app-footer />
    </template>
  </app-layout>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: 'Ooops… The page you\'re looking for is not found',
      otherError: 'Something broke...'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style lang="scss">
  .error-page {
    min-height: 70vh;
    padding: 60px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
</style>
