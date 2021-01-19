export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Snkrz Garden | Home of the Sneaker',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  target: 'server',
  env: {
    storeUrl: 'http://178.62.58.172/'
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'aos/dist/aos.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {src: '~/plugins/aos.js', mode: 'client'}
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    "@nuxtjs/google-fonts",
    '@nuxtjs/fontawesome',
    
  ],
  googleFonts:{
    families: {
      Raleway: true,
      'Open+Sans': true,
      'Permanent+Marker': true,
    },
    display: 'swap',
    prefetch: 'true'
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {}
  },
  fontawesome:{
    component: 'fa',
    icons: {
      solid:['faBars','faPhone','faPaperPlane', 'faAt'],
      brands:['faWhatsapp']
    }
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/apollo',
    '@nuxtjs/strapi'
  ],
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'http://178.62.58.172/graphql'
      }
    }
  },
  strapi:{
    entities:['Snkrzs', 'Usuarios'],
    url: process.env.API_URL || "http://178.62.58.172/",
  },
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},
 
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config,ctx){
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/,
        options:{
          fix: true
        }
      })
    }
  }
}
