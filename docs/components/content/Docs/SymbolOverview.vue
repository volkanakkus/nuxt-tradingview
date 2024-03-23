<template>
  <div>
    <DocsSymbolOverview :key="$colorMode.value" :options="options" />
  </div>
</template>

<script lang="ts" setup>
const { $colorMode } = useNuxtApp();

const options = computed(() => ({
  width: '100%',
  height: 450,
  colorTheme: $colorMode.value,
  symbols: [
    ['Apple', 'AAPL|1D'],
    ['Google', 'GOOGL|1D'],
    ['Microsoft', 'MSFT|1D'],
  ],
  chartOnly: false,
  locale: 'en',
  autosize: false,
  showVolume: false,
  showMA: false,
  hideDateRanges: false,
  hideMarketStatus: false,
  hideSymbolLogo: false,
  scalePosition: 'right',
  scaleMode: 'Normal',
  fontFamily:
    '-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif',
  fontSize: '10',
  noTimeScale: false,
  valuesTracking: '1',
  changeMode: 'price-and-percent',
  chartType: 'area',
  maLineColor: '#2962FF',
  maLineWidth: 1,
  maLength: 9,
  lineWidth: 2,
  lineType: 0,
  dateRanges: ['1d|1', '1m|30', '3m|60', '12m|1D', '60m|1W', 'all|1M'],
}));
</script>
