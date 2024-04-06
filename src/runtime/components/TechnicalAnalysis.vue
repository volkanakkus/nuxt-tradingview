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
const options = props.options || {
  width: '100%',
  height: 450,
  colorTheme: 'dark',
  interval: '1m',
  isTransparent: false,
  symbol: 'NASDAQ:AAPL',
  showIntervalTabs: true,
  displayMode: 'single',
  locale: 'en',
};

const { container, tradingview } = useInitWidget(
  options,
  props.class,
  'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js'
);
</script>
