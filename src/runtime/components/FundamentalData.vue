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
import { fundamentalDataOptions } from '../data/defaultWidgetOptions';
import useInitWidget from '../composables/useInitWidget';

type FundamentalData = typeof fundamentalDataOptions & {
  [key: string]: unknown;
};

const props = withDefaults(defineProps<{
  options?: Partial<FundamentalData>
  class?: string
}>(), {
  class: 'fundamental-data',
  options: undefined
})

const { container, tradingview } = useInitWidget(
  fundamentalDataOptions as FundamentalData,
  props.options as FundamentalData,
  props.class,
  'https://s3.tradingview.com/external-embedding/embed-widget-financials.js'
);
</script>
