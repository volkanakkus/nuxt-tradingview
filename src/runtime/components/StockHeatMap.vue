<template>
  <div
    :id="container"
    ref="tradingview"
    :style="{
      width: options?.autosize ? '100%' : '',
      height: options?.autosize ? '100%' : '',
    }" />
</template>

<script lang="ts" setup>
import { stockHeatMapOptions } from '../data/defaultWidgetOptions';
import useInitWidget from '../composables/useInitWidget';

type StockHeatMap = typeof stockHeatMapOptions & {
  [key: string]: unknown;
};

const props = withDefaults(defineProps<{
  options?: Partial<StockHeatMap>
  class?: string
}>(), {
  class: 'stock-heat-map',
  options: undefined
})

const { container, tradingview } = useInitWidget(
  stockHeatMapOptions as StockHeatMap,
  props.options as StockHeatMap,
  props.class,
  'https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js'
);
</script>
