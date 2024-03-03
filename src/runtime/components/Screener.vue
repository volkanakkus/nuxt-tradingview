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
    default: 'screener',
  },
});
const options = {
  width: 1100,
  height: 523,
  defaultColumn: 'overview',
  defaultScreen: 'general',
  market: 'forex',
  showToolbar: true,
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
