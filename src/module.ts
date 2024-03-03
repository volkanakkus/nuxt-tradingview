import { defineNuxtModule, addComponent, createResolver } from '@nuxt/kit';

// Module options TypeScript interface definition
export interface ModuleOptions {
  prefix?: string;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-tradingview',
    configKey: 'tradingview',
    compatibility: {
      nuxt: '^3.0.0',
    },
  },
  defaults: {
    prefix: '',
  },
  setup(options) {
    const { resolve } = createResolver(import.meta.url);

    addComponent({
      name: `${options.prefix}SingleTicker`,
      global: true,
      filePath: resolve('./runtime/components/SingleTicker.vue'),
    });

    addComponent({
      name: `${options.prefix}Ticker`,
      global: true,
      filePath: resolve('./runtime/components/Ticker.vue'),
    });

    addComponent({
      name: `${options.prefix}SymbolInfo`,
      global: true,
      filePath: resolve('./runtime/components/SymbolInfo.vue'),
    });

    addComponent({
      name: `${options.prefix}StockMarket`,
      global: true,
      filePath: resolve('./runtime/components/StockMarket.vue'),
    });

    addComponent({
      name: `${options.prefix}Snaps`,
      global: true,
      filePath: resolve('./runtime/components/Snaps.vue'),
    });

    addComponent({
      name: `${options.prefix}Screener`,
      global: true,
      filePath: resolve('./runtime/components/Screener.vue'),
    });

    addComponent({
      name: `${options.prefix}MiniChart`,
      global: true,
      filePath: resolve('./runtime/components/MiniChart.vue'),
    });

    addComponent({
      name: `${options.prefix}MarketOverview`,
      global: true,
      filePath: resolve('./runtime/components/MarketOverview.vue'),
    });

    addComponent({
      name: `${options.prefix}MarketData`,
      global: true,
      filePath: resolve('./runtime/components/MarketData.vue'),
    });

    addComponent({
      name: `${options.prefix}TickerTape`,
      global: true,
      filePath: resolve('./runtime/components/TickerTape.vue'),
    });

    addComponent({
      name: `${options.prefix}FundamentalData`,
      global: true,
      filePath: resolve('./runtime/components/FundamentalData.vue'),
    });

    addComponent({
      name: `${options.prefix}ForexHeatMap`,
      global: true,
      filePath: resolve('./runtime/components/ForexHeatMap.vue'),
    });

    addComponent({
      name: `${options.prefix}ForexCrossRates`,
      global: true,
      filePath: resolve('./runtime/components/ForexCrossRates.vue'),
    });

    addComponent({
      name: `${options.prefix}EconomicCalendar`,
      global: true,
      filePath: resolve('./runtime/components/EconomicCalendar.vue'),
    });

    addComponent({
      name: `${options.prefix}TechnicalAnalysis`,
      global: true,
      filePath: resolve('./runtime/components/TechnicalAnalysis.vue'),
    });

    addComponent({
      name: `${options.prefix}CryptoMarket`,
      global: true,
      filePath: resolve('./runtime/components/CryptoMarket.vue'),
    });

    addComponent({
      name: `${options.prefix}CryptoHeatMap`,
      global: true,
      filePath: resolve('./runtime/components/CryptoHeatMap.vue'),
    });

    addComponent({
      name: `${options.prefix}CompanyProfile`,
      global: true,
      filePath: resolve('./runtime/components/CompanyProfile.vue'),
    });

    addComponent({
      name: `${options.prefix}Chart`,
      global: true,
      filePath: resolve('./runtime/components/Chart.vue'),
    });

    addComponent({
      name: `${options.prefix}SymbolOverview`,
      global: true,
      filePath: resolve('./runtime/components/SymbolOverview.vue'),
    });
  },
});
