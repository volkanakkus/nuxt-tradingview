<template>
  <div ref="tradingview" :id="container" />
</template>

<script lang="ts" setup>
import useInitWidget from '../composables/useInitWidget';

const props = defineProps({
  options: {
    type: Object,
    default: {},
  },
  class: {
    type: String,
    default: 'single-ticker',
  },
});

const options = {
  symbol: 'FX:EURUSD',
  width: 350,
  colorTheme: 'light',
  isTransparent: false,
  locale: 'en',
  ...props.options,
};

const { container, tradingview } = useInitWidget(
  options,
  props.class,
  'https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js'
);
</script>
