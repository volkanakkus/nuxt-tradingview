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
    default: 'stock-heat-map',
  },
});
const options = {
  exchanges: [],
  dataSource: 'SPX500',
  grouping: 'sector',
  blockSize: 'market_cap_basic',
  blockColor: 'change',
  locale: 'en',
  symbolUrl: '',
  colorTheme: 'dark',
  hasTopBar: false,
  isDataSetEnabled: false,
  isZoomEnabled: true,
  hasSymbolTooltip: true,
  width: '100%',
  height: '100%',
  ...props.options,
};

const { container, tradingview } = useInitWidget(
  options,
  props.class,
  'https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js'
);
</script>
