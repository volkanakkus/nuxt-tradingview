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
import { tickerOptions } from '../data/defaultWidgetOptions';
import useInitWidget from '../composables/useInitWidget';

type TickerOptions = typeof tickerOptions & {
  [key: string]: unknown;
};

const props = withDefaults(defineProps<{
  options?: Partial<TickerOptions>
  class?: string
}>(), {
  class: 'ticker',
  options: undefined
})

const { container, tradingview } = useInitWidget(
  tickerOptions as TickerOptions,
  props.options as TickerOptions,
  props.class,
  'https://s3.tradingview.com/external-embedding/embed-widget-tickers.js'
);
</script>
