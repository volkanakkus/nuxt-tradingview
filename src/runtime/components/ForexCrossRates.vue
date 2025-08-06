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
import { forexCrossRatesOptions } from '../data/defaultWidgetOptions';
import useInitWidget from '../composables/useInitWidget';

type ForexCrossRatesOptions = typeof forexCrossRatesOptions & {
  [key: string]: unknown;
};

const props = withDefaults(defineProps<{
  options?: Partial<ForexCrossRatesOptions>
  class?: string
}>(), {
  class: 'forex-cross-rates',
  options: undefined
})

const { container, tradingview } = useInitWidget(
  forexCrossRatesOptions as ForexCrossRatesOptions,
  props.options as ForexCrossRatesOptions,
  props.class,
  'https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js'
);
</script>
