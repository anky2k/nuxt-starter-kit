export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-starter',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { 'http-equiv': 'Accept-CH', content: 'DPR, Width, Viewport-Width' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    bodyAttrs: {
      class: 'h-screen bg-gray-900'
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '../assets/css/tailwind-ssr.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/placeholders.js',
    '@/plugins/mock.js',
    '@/plugins/device-detection.js',
  ],

  serverMiddleware: ['@/server-middleware/mock'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/svg'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://http.nuxtjs.org/
    '@nuxt/http',
    // https://composition-api.nuxtjs.org/getting-started/setup
    '@nuxtjs/composition-api/module'    
  ],

  env: {
    MOCK_MODE: process.env.MOCK,
  },
  
  
  // http: {
  //   proxyHeaders: false,
  //   retry: false,
  //   serverTimeout: 5000,
  //   clientTimeout: 5000,
  //   headers: {
  //     'Accept': 'application/json',
  //     'content-type': 'application/json'
  //   }
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
