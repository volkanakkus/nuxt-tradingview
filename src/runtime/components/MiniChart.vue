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
import { miniChartOptions } from '../data/defaultWidgetOptions';
import useInitWidget from '../composables/useInitWidget';

type MiniChartOptions = typeof miniChartOptions & {
  [key: string]: unknown;
};

const props = withDefaults(defineProps<{
  options?: Partial<MiniChartOptions>
  class?: string
}>(), {
  class: 'mini-chart',
  options: undefined
})

const { container, tradingview } = useInitWidget(
  miniChartOptions as MiniChartOptions,
  props.options as MiniChartOptions,
  props.class,
  'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
);
</script>
