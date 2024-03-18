export default defineNuxtConfig({
  modules: ['../src/module'],
  tradingview: {
    // prefix: 'TV',
    // importOnly: ['Chart', 'SymbolOverview'],
    // experimental: {
    //   anonymousCrossOrigin: true,
    // },
  },
  devtools: { enabled: true },
});
