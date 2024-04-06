<template>
  <div
    :id="container"
    ref="tradingview"
    :style="{
      width: options.autosize && '100%',
      height: options.autosize && '100%',
    }" />
</template>

<script lang="ts" setup>
import useInitWidget from '../composables/useInitWidget';

const props = defineProps({
  options: {
    type: Object,
    default: () => {},
  },
  class: {
    type: String,
    default: 'symbol-overview',
  },
});

const options = props.options || {
  width: '100%',
  height: 450,
  colorTheme: 'dark',
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
};

const { container, tradingview } = useInitWidget(
  options,
  props.class,
  'https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js'
);
</script>
