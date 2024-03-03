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
    default: 'forex-cross-rates',
  },
});
const options = {
  symbol: 'NASDAQ:AAPL',
  color: 'blak',
  isTransparent: false,
  largeChartUrl: '',
  displayMode: 'regular',
  width: '100%',
  height: '100%',
  locale: 'br',
  ...props.options,
};

const { container, tradingview } = useInitWidget(
  options,
  props.class,
  'https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js'
);
</script>
