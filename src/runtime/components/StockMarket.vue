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
import { stockMarketOptions } from '../data/defaultWidgetOptions';
import useInitWidget from '../composables/useInitWidget';

type StockMarketOptions = typeof stockMarketOptions & {
  [key: string]: unknown;
};

const props = withDefaults(defineProps<{
  options?: Partial<StockMarketOptions>
  class?: string
}>(), {
  class: 'stock-market',
  options: undefined
})

const { container, tradingview } = useInitWidget(
  stockMarketOptions as StockMarketOptions,
  props.options as StockMarketOptions,
  props.class,
  'https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js'
);
</script>
