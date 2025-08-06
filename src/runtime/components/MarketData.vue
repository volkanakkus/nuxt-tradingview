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
import { marketDataOptions } from '../data/defaultWidgetOptions';
import useInitWidget from '../composables/useInitWidget';

type MarketDataOptions = typeof marketDataOptions & {
  [key: string]: unknown;
};

const props = withDefaults(defineProps<{
  options?: Partial<MarketDataOptions>
  class?: string
}>(), {
  class: 'market-data',
  options: undefined
})

const { container, tradingview } = useInitWidget(
  marketDataOptions as MarketDataOptions,
  props.options as MarketDataOptions,
  props.class,
  'https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js'
);
</script>
