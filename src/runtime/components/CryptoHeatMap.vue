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
    default: 'crypto-heat-map',
  },
});

const options = props.options || {
  dataSource: 'Crypto',
  width: '100%',
  height: 450,
  colorTheme: 'dark',
  blockSize: 'market_cap_calc',
  blockColor: 'change',
  locale: 'en',
  symbolUrl: '',
  hasTopBar: false,
  isDataSetEnabled: false,
  isZoomEnabled: true,
  hasSymbolTooltip: true,
};

const { container, tradingview } = useInitWidget(
  options,
  props.class,
  'https://s3.tradingview.com/external-embedding/embed-widget-crypto-coins-heatmap.js'
);
</script>
