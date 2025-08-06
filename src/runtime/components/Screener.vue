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
import { screenerOptions } from '../data/defaultWidgetOptions';
import useInitWidget from '../composables/useInitWidget';

type ScreenerOptions = typeof screenerOptions & {
  [key: string]: unknown;
};

const props = withDefaults(defineProps<{
  options?: Partial<ScreenerOptions>
  class?: string
}>(), {
  class: 'screener',
  options: undefined
})

const { container, tradingview } = useInitWidget(
  screenerOptions as ScreenerOptions,
  props.options as ScreenerOptions,
  props.class,
  'https://s3.tradingview.com/external-embedding/embed-widget-screener.js'
);
</script>
