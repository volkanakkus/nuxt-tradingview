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
import { singleTickerOptions } from '../data/defaultWidgetOptions';
import useInitWidget from '../composables/useInitWidget';

type SingleTickerOptions = typeof singleTickerOptions & {
  [key: string]: unknown;
};

const props = withDefaults(defineProps<{
  options?: Partial<SingleTickerOptions>
  class?: string
}>(), {
  class: 'single-ticker',
  options: undefined
})

const { container, tradingview } = useInitWidget(
  singleTickerOptions as SingleTickerOptions,
  props.options as SingleTickerOptions,
  props.class,
  'https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js'
);
</script>
