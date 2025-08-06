export default defineNuxtConfig({
  modules: ['../src/module'],
  tradingview: {
    // prefix: 'TV',
    // importOnly: ['Chart', 'SymbolOverview'],
    // overrideDefaults: false,
    // experimental: {
    //   anonymousCrossOrigin: true,
    // },
  },
  devtools: { enabled: true },
});
