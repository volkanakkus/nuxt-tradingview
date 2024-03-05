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

<!-- - [✨ &nbsp;Release Notes](/CHANGELOG.md) -->
<!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/nuxt-tradingview?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

<!-- Highlight some of the features your module provide here -->
- Nuxt 3 Ready
- Multiple Widgets in Single Page
- No registration or API for TradingView

## Documentation

We're preparing the documentation and playground, it will be added soon.

But you should also check the [Tradingview Docs](https://www.tradingview.com/widget-docs/widgets/) for more info and about of the widgets.

## Quick Setup

1. Add `nuxt-tradingview` dependency to your project

```bash
# Using yarn
yarn add nuxt-tradingview

# Using npm
npm install nuxt-tradingview

# Using pnpm
pnpm add nuxt-tradingview
```

2. Add `nuxt-tradingview` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'nuxt-tradingview'
  ]
})
```

That's it! You can now use TradingView Widgets in your Nuxt app ✨

## Widgets Built-in

When you add this module, the following widget components are **automatically imported** into the project.

-   Chart
-   CompanyProfile
-   CryptoHeatMap
-   CryptoMarket
-   EconomicCalendar
-   ForexCrossRates
-   ForexHeatMap
-   FundamentalData
-   MarketData
-   MarketOverview
-   MiniChart
-   Screener
-   SingleTicker
-   Snaps
-   StockMarket
-   SymbolInfo
-   SymbolOverview
-   TechnicalAnalysis
-   Ticker
-   TickerTape

## Nuxt 3 Example

```js
<template>
  <Chart />
  <CryptoMarket />
  <Snaps/>
  <Screener/>
</template>
```

If you want to use multiple charts in single vue file, you should define unique class for every widget.

```js
<template>
  <Chart class="apple-chart"/>
  <Chart class="nvidia"/>
</template>
```

## Widget Options

The built-in widget components have default options based on Tradingview. 
Check available options on [Tradingview Docs](https://www.tradingview.com/widget-docs/widgets/)

```js
<template>
  <Chart
    :options="{
      theme: 'dark',
      autosize: true,
      symbol: 'NASDAQ:AAPL',
      timezone: 'Etc/UTC',
    }"
  />
</template>
```

Or, you can pass variable into it:

```js
<template>
  <Chart
    :options="options"
  />
</template>

<script lang="ts" setup>
const options = {
  theme: 'dark',
  autosize: true,
  symbol: 'NASDAQ:AAPL',
  timezone: 'Etc/UTC',
};
</script>
```


## Module Options

With module options, you can set prefix to every component. You must add `tradingview` config to `nuxt.config.ts`, here's the example:

```js
export default defineNuxtConfig({
  modules: [
    'nuxt-tradingview'
  ],

  tradingview: {
    prefix: 'TV' // if it's not defined, you can use the components as shown as in the docs. 
  }
})
```

Then you can use the components as:

```js
<template>
  <TVChart />
  <TVCryptoMarket />
  <TVSnaps/>
  <TVScreener/>
</template>
```

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
