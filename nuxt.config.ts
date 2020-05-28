import { Configuration } from '@nuxt/types'
import { ProvidePlugin, NormalModuleReplacementPlugin } from 'webpack'
const colors = require('vuetify/es5/util/colors').default

const config: Configuration = {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: "https://kit.fontawesome.com/ea4156ef84.js", crossorigin: "anonymous"}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
		'@/assets/style/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
    'nuxt-typed-vuex'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
		'@nuxtjs/vuetify',
    '@nuxtjs/axios'
  ],
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: '#F7BE33',
          secondary: '#FF9800',
          accent: '#607D8B',
          error: '#F44336',
          warning: '#FFEB3B',
          info: '#00BCD4',
          success: '#4CAF50'
        },
        light: {
          primary: colors.white,
          accent: colors.white,
          secondary: colors.white
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      if (process.env.NODE_STAGING == 'true') {
        config.plugins!.push( new NormalModuleReplacementPlugin(
					/environment\/defaults\.json/,
					'@/environment/defaults.staging.json'
				));
      } else if (process.env.NODE_ENV == 'production') {
				config.plugins!.push( new NormalModuleReplacementPlugin(
					/environment\/defaults\.json/,
					'@/environment/defaults.prod.json'
				));
			}
		},
		plugins: [
			new ProvidePlugin({
				'_': 'lodash'
			})
		]
	},
	env: {
		nodeEnv: process.env.NODE_ENV || ''
  }
}

export default config