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
import { tickerTapeOptions } from '../data/defaultWidgetOptions';
import useInitWidget from '../composables/useInitWidget';

type TickerTapeOptions = typeof tickerTapeOptions & {
  [key: string]: unknown;
};

const props = withDefaults(defineProps<{
  options?: Partial<TickerTapeOptions>
  class?: string
}>(), {
  class: 'ticker',
  options: undefined
})

const { container, tradingview } = useInitWidget(
  tickerTapeOptions as TickerTapeOptions,
  props.options as TickerTapeOptions,
  props.class,
  'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js'
);
</script>
