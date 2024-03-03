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
    default: 'stock-market',
  },
});
const options = {
  colorTheme: 'light',
  dateRange: '12M',
  exchange: 'US',
  showChart: true,
  locale: 'en',
  largeChartUrl: '',
  isTransparent: false,
  showSymbolLogo: false,
  showFloatingTooltip: false,
  width: '400',
  height: '600',
  plotLineColorGrowing: 'rgba(41, 98, 255, 1)',
  plotLineColorFalling: 'rgba(41, 98, 255, 1)',
  gridLineColor: 'rgba(240, 243, 250, 0)',
  scaleFontColor: 'rgba(120, 123, 134, 1)',
  belowLineFillColorGrowing: 'rgba(41, 98, 255, 0.12)',
  belowLineFillColorFalling: 'rgba(41, 98, 255, 0.12)',
  belowLineFillColorGrowingBottom: 'rgba(41, 98, 255, 0)',
  belowLineFillColorFallingBottom: 'rgba(41, 98, 255, 0)',
  symbolActiveColor: 'rgba(41, 98, 255, 0.12)',
  ...props.options,
};
const { container, tradingview } = useInitWidget(
  options,
  props.class,
  'https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js'
);
</script>
