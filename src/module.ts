import { defineNuxtModule, addComponent, createResolver } from '@nuxt/kit';
import type { AllWidgets } from './runtime/types';

export interface ModuleOptions {
  prefix?: string; 
  // Prefix for component names
  importOnly?: Partial<AllWidgets>[]; 
  // If provided, only these components will be imported
  overrideDefaults?: boolean; 
  // If true, allows overriding default options in components
  experimental?: {
    anonymousCrossOrigin?: boolean; 
    // If true, adds crossOrigin="anonymous" to script tags
  };
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-tradingview',
    configKey: 'tradingview',
    compatibility: {
      nuxt: '>=3.0.0',
    },
  },
  defaults: {
    prefix: '',
    importOnly: undefined,
    overrideDefaults: true,
    experimental: {
      anonymousCrossOrigin: false,
    },
  },
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);

    // All components
    const components: AllWidgets[] = [
      'SingleTicker',
      'Ticker',
      'SymbolInfo',
      'StockMarket',
      'StockHeatMap',
      'Screener',
      'MiniChart',
      'MarketOverview',
      'MarketData',
      'TickerTape',
      'FundamentalData',
      'ForexHeatMap',
      'ForexCrossRates',
      'EconomicCalendar',
      'TechnicalAnalysis',
      'CryptoMarket',
      'CryptoHeatMap',
      'CompanyProfile',
      'Chart',
      'SymbolOverview',
      'TopStories',
    ];

    // Add components
    const processComponent = (component: AllWidgets) => {
      return {
        name: `${options.prefix}${component}`,
        global: true,
        filePath: resolve(`./runtime/components/${component}.vue`),
      };
    };

    // Add widgets selectively or all
    const importWidgets = options.importOnly
      ? components.filter((component) =>
          options.importOnly?.includes(component)
        )
      : components;

    importWidgets.map(processComponent).forEach(addComponent);

    // Add options to runtimeConfig
    nuxt.options.runtimeConfig.public.tradingview = {
      ...nuxt.options.runtimeConfig.public.tradingview,
      overrideDefaults: !!options.overrideDefaults,
      experimental: {
        anonymousCrossOrigin: !!options.experimental?.anonymousCrossOrigin,
      },
    };
  },
});
