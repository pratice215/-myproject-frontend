const apiUrl = process.env.NODE_ENV === 'production'
  ? process.env.API_URL
  : 'http://localhost:4000'

module.exports = {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  telemetry: false,
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/main.scss'
  ],
  loading: false,

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/ngrok',
    '@nuxtjs/vuetify'
  ],

  ngrok: {
  },

  /*
  ** Nuxt.js modules
  */
  modules: [
  // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],

  axios: {
    proxy: true,
    credentials: true
  },
  proxy: {
    '/api': {
      target: apiUrl,
      pathRewrite: { '^/api': '/' }
    }
  },

  /*
  ** ESlint
  */
  eslint: {
    fix: true
  },
  /*
  ** Stylelint
  */
  stylelint: {
    fix: true
  },

  styleResources: {
    scss: [
      '@/assets/variables.scss'
    ]
  },

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    defaultAssets: {
      font: false,
      icons: 'mdiSvg'
    },
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#2F80ED',
          secondary: '#F2C94C',
          accent: '#3a4c58'
        }
      }
    }
  },

  serverMiddleware: [
    { path: '/~health', handler: '~/api/health.js' }
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    babel: {
      plugins: [
        ['@babel/plugin-proposal-private-methods', { loose: true }],
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }]
      ]
    }
  }
}
