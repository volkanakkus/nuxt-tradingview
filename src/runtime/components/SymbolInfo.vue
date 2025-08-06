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
import { symbolInfoOptions } from '../data/defaultWidgetOptions';
import useInitWidget from '../composables/useInitWidget';

type SymbolInfoOptions = typeof symbolInfoOptions & {
  [key: string]: unknown;
};

const props = withDefaults(defineProps<{
  options?: Partial<SymbolInfoOptions>
  class?: string
}>(), {
  class: 'symbol-info',
  options: undefined
})

const { container, tradingview } = useInitWidget(
  symbolInfoOptions as SymbolInfoOptions,
  props.options as SymbolInfoOptions,
  props.class,
  'https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js'
);
</script>
