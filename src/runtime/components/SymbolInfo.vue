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
  width: '100%',
  colorTheme: 'dark',
  symbol: 'NASDAQ:AAPL',
  locale: 'en',
  isTransparent: false,
  ...props.options,
};

const { container, tradingview } = useInitWidget(
  options,
  props.class,
  'https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js'
);
</script>
