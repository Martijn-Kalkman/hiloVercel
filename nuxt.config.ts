import { ABI } from './../nftmarketplace/app/nftABI';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: false },

  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', 'nuxt-swiper'],

  icon: {
    customCollections: [
      {
        prefix: 'icons',
        dir: './app/assets/icons',
      },
    ],
  },

  css: ['~/assets/css/main.css'],

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  runtimeConfig: {
    public: {
      bandsintown: process.env.BANDSINTOWN_API,
      youtube: process.env.YOUTUBE_API,
    },
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      script: [
        { src: 'https://unpkg.com/three-globe', defer: true },
        // Uncomment the following line if using a local file
        // { src: '../../dist/three-globe.js', defer: true }
      ],
    },
  },

  plugins: [{ src: '~/plugins/three-globe.client.js', mode: 'client' }],

  nitro: {
    esbuild: {
      options: {
        target: 'esnext', // Gives top level await
      },
    },
    experimental: {
      tasks: true,
    },
    scheduledTasks: {
      // Run `youtube:refresh` task every hour at minute 0
      '0 * * * *': ['youtube:refresh'],
      // Run `bandsintown:refresh` task every 5 minutes
      '*/5 * * * *': ['bandsintown:refresh'],
    },
  },
});
