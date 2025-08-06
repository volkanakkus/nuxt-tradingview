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
import { forexHeatMapOptions } from '../data/defaultWidgetOptions';
import useInitWidget from '../composables/useInitWidget';

type ForexHeatMapOptions = typeof forexHeatMapOptions & {
  [key: string]: unknown;
};

const props = withDefaults(defineProps<{
  options?: Partial<ForexHeatMapOptions>
  class?: string
}>(), {
  class: 'forex-heat-map',
  options: undefined
})

const { container, tradingview } = useInitWidget(
  forexHeatMapOptions as ForexHeatMapOptions,
  props.options as ForexHeatMapOptions,
  props.class,
  'https://s3.tradingview.com/external-embedding/embed-widget-forex-heat-map.js'
);
</script>
