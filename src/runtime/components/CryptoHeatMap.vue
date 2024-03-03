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
    default: 'crypto-heat-map',
  },
});
const options = {
  dataSource: 'Crypto',
  width: 770,
  height: 400,
  hasTopBar: false,
  isDataSetEnabled: false,
  colorTheme: 'dark',
  locale: 'en',
  ...props.options,
};

const { container, tradingview } = useInitWidget(
  options,
  props.class,
  'https://s3.tradingview.com/external-embedding/embed-widget-crypto-coins-heatmap.js'
);
</script>
