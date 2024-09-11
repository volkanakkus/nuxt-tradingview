![nuxt-tradingview-social-card](https://raw.githubusercontent.com/volkanakkus/nuxt-tradingview/assets/cover.png)

# Nuxt TradingView

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Use the TradingView Widgets in your Nuxt Application
- Compatibility: ```Nuxt >= 3```
- [🏀 Online playground](https://nuxt-tradingview.volkanakkus.com/playground)


## Features

<!-- Highlight some of the features your module provide here -->
- 🧺 Multiple Widgets in Single Page
- 🍧 No Registration or API for TradingView
- 🌴 Optional Widget Inclusion (For Reducing Bundle Size)
- 🍽️ Customizable Component Names with Prefix Option

[✨ &nbsp;Release Notes](/CHANGELOG.md)

## Documentation

We've prepared **detailed documentation and playground** which you can [find here](https://nuxt-tradingview.volkanakkus.com/), but you can also refer to the examples below. 

Additionally, you can check the [Tradingview Docs](https://www.tradingview.com/widget-docs/widgets/) for more information and configuration about the widgets.

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
When you add this module, the following widget components are **automatically imported** into the project:

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
-   StockMarket
-   StockHeatMap
-   SymbolInfo
-   SymbolOverview
-   TechnicalAnalysis
-   Ticker
-   TickerTape
-   TopStories

## Examples

The built-in widgets have default options based on Tradingview. If you did not define any options, the default options will be applied. Check available options on the [Tradingview Docs](https://www.tradingview.com/widget-docs/widgets/)


### Basic Usage

Example of using all widgets with default options:

```js
<template>
  <Chart />
  <CryptoMarket />
  <TopStories/>
  <Screener/>
</template>
```

 Configuring the widgets with options according to [Tradingview Docs](https://www.tradingview.com/widget-docs/widgets/):

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

Or, you can pass a ref variable into it:

```js
<template>
  <Chart :options="chartOptions" />
</template>

<script setup lang="ts">
const chartOptions = ref({
  theme: 'dark',
  autosize: true,
  symbol: 'NASDAQ:AAPL',
  timezone: 'Etc/UTC',
})
</script>
```

### Multiple Widgets

If you want to use the same widgets multiple times on a single page, you should define a unique class for each widget.

```js
<template>
  <Chart class="apple-chart"/>
  <Chart class="nvidia-chart"/>
</template>
```

For example, in a for loop, you can use the key as a unique class:

```js
<template>
  <div v-for="symbol in symbols" :key="symbol">
    <SingleTicker :class="`ticker-${symbol}`" :options="{ symbol }" />
  </div>
</template>

<script setup lang="ts">
const symbols = ref(['FX:EURUSD', 'FX:GBPUSD', 'FX:USDJPY']);
</script>
```

### Dynamic Color Mode

For dynamic color mode support, you can integrate your color mode plugin or [@nuxtjs/color-mode](https://nuxt.com/modules/color-mode) module to the widget options with the `theme` or `colorTheme` property.

And for re-render the widget with every color change, you should also bind the color mode to the `:key` attribute in the template.

Example below is using the [@nuxtjs/color-mode](https://nuxt.com/modules/color-mode) module:

```js
<template>
  <div>
    <Chart :key="$colorMode.value" :options="options" />
  </div>
</template>

<script lang="ts" setup>
const { $colorMode } = useNuxtApp();

const options = computed(() => ({
  theme: $colorMode.value, // it must be 'light' or 'dark'
  width: '100%',
  height: '400',
  symbol: 'NASDAQ:AAPL',
  ...
}));
</script>
```

## Module Options

The module by default will inject **all widgets**, but you can configure it to inject only the widgets you need. Additionally, you can add a prefix to widget component names to avoid conflicts with other local components.

### prefix

To change default widget component names, you can add a `prefix` into the `tradingview` section to use every widget with that prefix.


```js
export default defineNuxtConfig({
  tradingview: {
    prefix: 'TV' 
  }
})
```

Then you can use the components as follows:

```js
<template>
  <TVChart />
  <TVCryptoMarket />
  <TVTopStories/>
  <TVScreener/>
</template>
```

If `prefix` is not defined, you can use the components as shown in the documentation.

### importOnly

To reduce the bundle size, you can import only the widgets you need. Add an `importOnly` parameter to the `tradingview` section to inject only the widgets you need. 

```js
export default defineNuxtConfig({
  tradingview: {
    importOnly: ['Chart', 'CryptoMarket', 'TopStories', 'Screener'] 
  }
})
```

> [!NOTE]
> Make sure to use the exact names of the widgets. Even if you define a `prefix`, you must use the default name of the widgets. You can find [all widget names here](https://nuxt-tradingview.volkanakkus.com/documentation/widgets/overview).

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

# Develop the docs
npm run dev:docs

```

---

This software is licensed under the [MIT License](https://github.com/volkanakkus/nuxt-tradingview/blob/main/LICENSE) | @volkanakkus | Special thanks to [@ehsan-shv](https://github.com/ehsan-shv) 💚 

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-tradingview/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/nuxt-tradingview

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-tradingview.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npmjs.com/package/nuxt-tradingview

[license-src]: https://img.shields.io/npm/l/nuxt-tradingview.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/nuxt-tradingview

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
