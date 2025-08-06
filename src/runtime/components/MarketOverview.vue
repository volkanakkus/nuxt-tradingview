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
import { marketOverviewOptions } from '../data/defaultWidgetOptions';
import useInitWidget from '../composables/useInitWidget';

type MarketOverviewOptions = typeof marketOverviewOptions & {
  [key: string]: unknown;
};

const props = withDefaults(defineProps<{
  options?: Partial<MarketOverviewOptions>
  class?: string
}>(), {
  class: 'market-overview',
  options: undefined
})

const { container, tradingview } = useInitWidget(
  marketOverviewOptions as MarketOverviewOptions,
  props.options as MarketOverviewOptions,
  props.class,
  'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js'
);
</script>
