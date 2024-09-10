declare module '@nuxt/schema' {
  interface PublicRuntimeConfig {
    tradingview: {
      experimental?: {
        anonymousCrossOrigin?: boolean;
      };
    };
  }
}
export {};
