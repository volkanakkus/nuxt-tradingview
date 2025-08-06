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
import { chartOptions } from '../data/defaultWidgetOptions';
import useInitWidget from '../composables/useInitWidget';

type ChartOptions = typeof chartOptions & {
  [key: string]: unknown;
};

const props = withDefaults(defineProps<{
  options?: Partial<ChartOptions>
  class?: string
}>(), {
  class: 'chart',
  options: undefined
})

const { container, tradingview } = useInitWidget(
  chartOptions as ChartOptions,
  props.options as ChartOptions,
  props.class,
  'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js'
);
</script>
