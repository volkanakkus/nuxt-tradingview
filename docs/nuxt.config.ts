export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: ['@nuxt-themes/docus'],
  devtools: { enabled: true },

  modules: ['nuxt-tradingview', '@nuxt/content', '@nuxtlabs/github-module'],

  github: {
    // owner: 'volkanakkus',
    // repo: 'nuxt-tradingview',
    repo: 'volkanakkus/nuxt-tradingview',
    // branch: 'main',
  },
});
