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
    default: 'top-stories',
  },
});
const options = {
  width: '100%',
  height: 450,
  colorTheme: 'dark',
  feedMode: 'all_symbols',
  isTransparent: false,
  displayMode: 'regular',
  locale: 'en',
  ...props.options,
};

const { container, tradingview } = useInitWidget(
  options,
  props.class,
  'https://s3.tradingview.com/external-embedding/embed-widget-timeline.js'
);
</script>
