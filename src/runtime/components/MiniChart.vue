<template>
  <div :id="container" ref="tradingview" />
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
    default: 'mini-chart',
  },
});
const options = {
  symbol: 'FX:EURUSD',
  width: 350,
  height: 220,
  locale: 'en',
  dateRange: '12M',
  colorTheme: 'light',
  trendLineColor: 'rgba(41, 98, 255, 1)',
  underLineColor: 'rgba(41, 98, 255, 0.3)',
  underLineBottomColor: 'rgba(41, 98, 255, 0)',
  isTransparent: false,
  autosize: false,
  largeChartUrl: '',
  ...props.options,
};

const { container, tradingview } = useInitWidget(
  options,
  props.class,
  'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
);
</script>
