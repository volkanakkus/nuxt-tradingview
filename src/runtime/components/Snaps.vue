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
    default: 'snaps',
  },
});
const options = {
  feedMode: 'all_symbols',
  colorTheme: 'light',
  isTransparent: false,
  displayMode: 'regular',
  width: 480,
  height: 830,
  locale: 'en',
  ...props.options,
};

const { container, tradingview } = useInitWidget(
  options,
  props.class,
  'https://s3.tradingview.com/external-embedding/embed-widget-timeline.js'
);
</script>
