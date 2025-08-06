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
import { symbolOverviewOptions } from '../data/defaultWidgetOptions';
import useInitWidget from '../composables/useInitWidget';

type SymbolOverviewOptions = typeof symbolOverviewOptions & {
  [key: string]: unknown;
};

const props = withDefaults(defineProps<{
  options?: Partial<SymbolOverviewOptions>
  class?: string
}>(), {
  class: 'symbol-overview',
  options: undefined
})

const { container, tradingview } = useInitWidget(
  symbolOverviewOptions as SymbolOverviewOptions,
  props.options as SymbolOverviewOptions,
  props.class,
  'https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js'
);
</script>
