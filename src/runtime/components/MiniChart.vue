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
const options = props.options || {
  width: '100%',
  height: 200,
  colorTheme: 'dark',
  symbol: 'FX:EURUSD',
  locale: 'en',
  dateRange: '12M',
  isTransparent: false,
  autosize: false,
  largeChartUrl: '',
};

const { container, tradingview } = useInitWidget(
  options,
  props.class,
  'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
);
</script>
