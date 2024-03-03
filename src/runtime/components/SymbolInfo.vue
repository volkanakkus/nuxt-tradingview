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
    default: 'symbol-info',
  },
});
const options = {
  symbol: 'NASDAQ:AAPL',
  width: 1000,
  locale: 'en',
  colorTheme: 'light',
  isTransparent: false,
  ...props.options,
};

const { container, tradingview } = useInitWidget(
  options,
  props.class,
  'https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js'
);
</script>
