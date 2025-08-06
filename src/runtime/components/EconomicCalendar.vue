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
import { economicCalendarOptions } from '../data/defaultWidgetOptions';
import useInitWidget from '../composables/useInitWidget';

type EconomicCalendarOptions = typeof economicCalendarOptions & {
  [key: string]: unknown;
};

const props = withDefaults(defineProps<{
  options?: Partial<EconomicCalendarOptions>
  class?: string
}>(), {
  class: 'economic-calendar',
  options: undefined
})

const { container, tradingview } = useInitWidget(
  economicCalendarOptions as EconomicCalendarOptions,
  props.options as EconomicCalendarOptions,
  props.class,
  'https://s3.tradingview.com/external-embedding/embed-widget-events.js'
);
</script>
