import { defineNuxtModule, addComponent, createResolver } from '@nuxt/kit';

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-tradingview',
    configKey: 'tradingview',
    compatibility: {
      nuxt: '^3.0.0',
    },
  },
  defaults: {},
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);

    addComponent({
      name: 'SingleTicker',
      global: true,
      filePath: resolve('./runtime/components/SingleTicker.vue'),
    });
  },
});
