<template>
  <v-container>
    <h1>Welcome!</h1>
    <v-progress-circular v-if="loading" indeterminate color="primary" />
    <div v-else-if="errorMessage">
      {{ errorMessage }}
    </div>
    <div v-else>
      You last visited this site at: {{ lastDate || 'Never' }}.<br>
    </div>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      loading: true,
      errorMessage: null,
      lastDate: null
    }
  },
  async fetch () {
    this.loading = true
    try {
      const response = await this.$axios.$get('/api')
      this.lastDate = response.lastDate
    } catch (error) {
      this.errorMessage = error.message
    }
    this.loading = false
  },
  head () {
    return {
      title: 'My Project Sample',
      meta: [
        { hid: 'description', name: 'description', content: 'Sample NuxtJS frontend and Vuetify made by tonoid' }
      ]
    }
  }
}
</script>
