import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  meta: {
    ogType: 'website',
    ogImage: '',
    // ogUrl: false,
    ogTitle: 'BizCard - An Open-Source Digital Business Card Generator',
    ogDescription:
      'BizCard helps you create beautiful, responsive HTML-based digital business cards that can be hosted on your website.',
    ogSiteName: 'BizCard - An Open-Source Digital Business Card Generator',
    author: 'Alex VRBK',
    lang: 'en',
    name: 'BizCard - An Open-Source Digital Business Card Generator',
  },

  head: {
    titleTemplate: 'BizCard',
    title: 'BizCard - An Open-Source Digital Business Card Generator',
    
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/qrcode'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],
  router: {
    middleware: ['auth'],
    
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/google-fonts',
    
      [
        '@nuxtjs/firebase',
        {
          config: {
            apiKey: 'AIzaSyBYaAkRPsybxtcy3G_yLCnVInK1TcMBwHk',
            authDomain: 'nuxt-basic-1e473.firebaseapp.com',
            projectId: 'nuxt-basic-1e473',
            storageBucket: 'nuxt-basic-1e473.appspot.com',
            messagingSenderId: '95926507341',
            appId: '1:95926507341:web:c6bb1aeb7358f630b9c904',
            measurementId: 'G-HK8RMJFLXY'
          },
          services: {
            auth: {
              persistence: 'local', // default
              initialize: {
                onAuthStateChangedAction: 'onAuthStateChangedAction',
                subscribeManually: false
              },
            }
          }
        }
      ]
  ],
   googleFonts: {
    families: {
      // Додайте назви шрифтів, які ви хочете використовувати
      // Наприклад, 'Roboto' та 'Open+Sans'
      'IBM+Plex+Mono': [400, 600],
      Montserrat: [400, 900]
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
 

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true, // Змінено значення на true для використання темної теми
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, { isDev, isClient }) {
      // Добавьте следующую настройку
      if (isClient) {
        config.resolve.alias['jszip'] = 'jszip/dist/jszip.min.js';
      }
    }
  },
  
}
