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
    default: 'economic-calendar',
  },
});
const options = {
  colorTheme: 'light',
  isTransparent: false,
  width: '510',
  height: '600',
  locale: 'en',
  importanceFilter: '-1,0,1',
  ...props.options,
};

const { container, tradingview } = useInitWidget(
  options,
  props.class,
  'https://s3.tradingview.com/external-embedding/embed-widget-events.js'
);
</script>
