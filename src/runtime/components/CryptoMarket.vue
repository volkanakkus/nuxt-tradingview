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
import { cryptoMarketOptions } from '../data/defaultWidgetOptions';
import useInitWidget from '../composables/useInitWidget';

type CryptoMarketOptions = typeof cryptoMarketOptions & {
  [key: string]: unknown;
};

const props = withDefaults(defineProps<{
  options?: Partial<CryptoMarketOptions>
  class?: string
}>(), {
  class: 'crypto-market',
  options: undefined
})

const { container, tradingview } = useInitWidget(
  cryptoMarketOptions as CryptoMarketOptions,
  props.options as CryptoMarketOptions,
  props.class,
  'https://s3.tradingview.com/external-embedding/embed-widget-screener.js'
);
</script>
