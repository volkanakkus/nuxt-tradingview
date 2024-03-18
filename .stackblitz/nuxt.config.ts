// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['nuxt-tradingview'],

  tradingview: {
    // prefix: 'TV',
    // importOnly: ['Chart'],
    experimental: {
      anonymousCrossOrigin: true,
    },
  },

  // This playground is still work in progress.
  // Following configuration is only necessary to make Stackblitz work correctly.
  // For local projects, you do not need any configuration to try it out.
});
