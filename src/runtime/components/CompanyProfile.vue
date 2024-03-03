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
    default: 'company-profile',
  },
});
const options = {
  symbol: 'NASDAQ:AAPL',
  width: 480,
  height: 650,
  colorTheme: 'light',
  isTransparent: false,
  locale: 'en',
  ...props.options,
};

const { container, tradingview } = useInitWidget(
  options,
  props.class,
  'https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js'
);
</script>
