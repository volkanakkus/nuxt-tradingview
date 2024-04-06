<template>
  <div
    :id="container"
    ref="tradingview"
    :style="{
      width: options.autosize && '100%',
      height: options.autosize && '100%',
    }" />
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
    default: 'chart',
  },
});

const options = props.options || {
  width: '100%',
  height: '400',
  symbol: 'NASDAQ:AAPL',
  interval: 'D',
  timezone: 'Etc/UTC',
  theme: 'dark',
  style: '1',
  backgroundColor: '#0C0C0D',
  locale: 'en',
  enable_publishing: false,
  allow_symbol_change: true,
  calendar: false,
};

const { container, tradingview } = useInitWidget(
  options,
  props.class,
  'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js'
);
</script>
