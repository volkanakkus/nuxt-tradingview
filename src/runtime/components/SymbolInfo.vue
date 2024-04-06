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
    default: 'symbol-info',
  },
});

const options = props.options || {
  width: '100%',
  colorTheme: 'dark',
  symbol: 'NASDAQ:AAPL',
  locale: 'en',
  isTransparent: false,
};

const { container, tradingview } = useInitWidget(
  options,
  props.class,
  'https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js'
);
</script>
