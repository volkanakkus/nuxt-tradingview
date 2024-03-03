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
    default: 'crypto-market',
  },
});
const options = {
  width: '100%',
  height: '100%',
  defaultColumn: 'overview',
  screener_type: 'crypto_mkt',
  displayCurrency: 'USD',
  colorTheme: 'light',
  locale: 'en',
  ...props.options,
};

const { container, tradingview } = useInitWidget(
  options,
  props.class,
  'https://s3.tradingview.com/external-embedding/embed-widget-screener.js'
);
</script>
