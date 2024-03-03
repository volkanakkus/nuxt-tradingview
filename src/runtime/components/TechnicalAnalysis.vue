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
    default: 'technical-analysis',
  },
});
const options = {
  interval: '1m',
  width: 425,
  isTransparent: false,
  height: 450,
  symbol: 'NASDAQ:AAPL',
  showIntervalTabs: true,
  locale: 'en',
  colorTheme: 'light',
  ...props.options,
};

const { container, tradingview } = useInitWidget(
  options,
  props.class,
  'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js'
);
</script>
