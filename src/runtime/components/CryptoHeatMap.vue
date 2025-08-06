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
import { cryptoHeatMapOptions } from '../data/defaultWidgetOptions';
import useInitWidget from '../composables/useInitWidget';

type CryptoHeatMapOptions = typeof cryptoHeatMapOptions & {
  [key: string]: unknown;
};

const props = withDefaults(defineProps<{
  options?: Partial<CryptoHeatMapOptions>
  class?: string
}>(), {
  class: 'crypto-heat-map',
  options: undefined
})

const { container, tradingview } = useInitWidget(
  cryptoHeatMapOptions as CryptoHeatMapOptions,
  props.options as CryptoHeatMapOptions,
  props.class,
  'https://s3.tradingview.com/external-embedding/embed-widget-crypto-coins-heatmap.js'
);
</script>
