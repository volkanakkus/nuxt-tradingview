![nuxt-tradingview-social-card](https://raw.githubusercontent.com/volkanakkus/nuxt-tradingview/assets/cover.png)

# Nuxt TradingView

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Use the TradingView Widgets in your Nuxt 3 Application

<!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/nuxt-tradingview?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

<!-- Highlight some of the features your module provide here -->
- 🧺 Multiple Widgets in Single Page
- 🍧 No Registration or API for TradingView
- 🌴 Optional Widget Inclusion
  
[✨ &nbsp;Release Notes](/CHANGELOG.md)


## Documentation

We've prepared **detailed documentation and playground** you can [**find here**](https://nuxt-tradingview.volkanakkus.com/), but also you can check the examples below.

And also you can look over the [Tradingview Docs](https://www.tradingview.com/widget-docs/widgets/) for more info about of the widgets.

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
-   StockMarket
-   StockHeatMap
-   SymbolInfo
-   SymbolOverview
-   TechnicalAnalysis
-   Ticker
-   TickerTape
-   TopStories

## Nuxt 3 Example

The built-in widgets have default options based on Tradingview. If you did not define any options, the default options will be applied. Check available options on [Tradingview Docs](https://www.tradingview.com/widget-docs/widgets/)


#### Basic Usage

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

#### Multiple Widgets

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

#### Dynamic Color Mode

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

The module by default will inject **all widgets** but you can configure it to inject only the widgets you need. Also you can add prefix to widget component names to avoid conflicts with other local components.

For module options, you must add `tradingview` config to `nuxt.config.ts`, 

#### prefix

Add a `prefix` into `tradingview` section to use every widget with that prefix.


```js
export default defineNuxtConfig({
  tradingview: {
    prefix: 'TV' 
  }
})
```

Then you can use the components as:

```js
<template>
  <TVChart />
  <TVCryptoMarket />
  <TVTopStories/>
  <TVScreener/>
</template>
```

> [!TIP]
> If `prefix` is not defined, you can use the components as shown as in the docs. 


#### importOnly

Add a `importOnly` into `tradingview` section to inject only the widgets you need. This can be useful if you want to reduce the bundle size. 

```js
export default defineNuxtConfig({
  tradingview: {
    importOnly: ['Chart', 'CryptoMarket', 'TopStories', 'Screener'] 
  }
})
```

> [!NOTE]
> Make sure to use the exact name of the widgets. Even if you define a `prefix`, you must use the default name of the widgets. You can find [all widget names here](/documentation/widgets/overview/).

---

And also special thanks to [@ehsan-shv](https://github.com/ehsan-shv), this module created with the same concept of [vue-tradingviewWidgets
](https://github.com/ehsan-shv/vue-tradingviewWidgets) package 💚 

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

# Run ESLint
npm run lint
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
