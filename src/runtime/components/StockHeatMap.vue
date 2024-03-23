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
  width: '100%',
  height: 450,
  colorTheme: 'dark',
  exchanges: [],
  dataSource: 'SPX500',
  grouping: 'no_group',
  blockSize: 'market_cap_basic',
  blockColor: 'Perf.YTD',
  locale: 'en',
  symbolUrl: '',
  hasTopBar: false,
  isDataSetEnabled: false,
  isZoomEnabled: true,
  hasSymbolTooltip: true,
  ...props.options,
};

const { container, tradingview } = useInitWidget(
  options,
  props.class,
  'https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js'
);
</script>
