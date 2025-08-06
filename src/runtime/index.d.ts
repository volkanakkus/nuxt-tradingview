declare module '@nuxt/schema' {
  interface PublicRuntimeConfig {
    tradingview: {
      overrideDefaults?: boolean;
      experimental?: {
        anonymousCrossOrigin?: boolean;
      };
    };
  }
}
export {};
