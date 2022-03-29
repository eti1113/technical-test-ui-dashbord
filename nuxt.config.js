export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ui-dashbord-monitoring',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    script: [
      { src: '/js/jquery.min.js', body: true , ssr: false },
      { src: '/js/bootstrap.bundle.min.js', body: true , ssr: false},
      { src: '/js/adminlte.min.js', body: true , ssr: false},
      { src: '/js/chart/Chart.min.js', body: true , ssr: false}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/all.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/adminlte.min.css' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
