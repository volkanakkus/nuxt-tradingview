<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: Nuxt TradingView
- Package name: nuxt-tradingview
- Description: My new Nuxt module
-->

# Nuxt TradingView

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Use the TradingView Widgets in your Nuxt 3 Application

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/nuxt-tradingview?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

<!-- Highlight some of the features your module provide here -->
- Nuxt 3 Ready
- Multiple Widgets in Single Page
- No registration or API for TradingView

## Quick Setup

1. Add `nuxt-tradingview` dependency to your project

```bash
# Using pnpm
pnpm add -D nuxt-tradingview

# Using yarn
yarn add --dev nuxt-tradingview

# Using npm
npm install --save-dev nuxt-tradingview
```

2. Add `nuxt-tradingview` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'nuxt-tradingview'
  ]
})
```

That's it! You can now use Nuxt TradingView in your Nuxt app ✨

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-tradingview/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/nuxt-tradingview

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-tradingview.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npmjs.com/package/nuxt-tradingview

[license-src]: https://img.shields.io/npm/l/nuxt-tradingview.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/nuxt-tradingview

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
