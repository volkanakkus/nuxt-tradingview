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
import { topStoriesOptions } from '../data/defaultWidgetOptions';
import useInitWidget from '../composables/useInitWidget';

type TopStoriesOptions = typeof topStoriesOptions & {
  [key: string]: unknown;
};

const props = withDefaults(defineProps<{
  options?: Partial<TopStoriesOptions>
  class?: string
}>(), {
  class: 'top-stories',
  options: undefined
})

const { container, tradingview } = useInitWidget(
  topStoriesOptions as TopStoriesOptions,
  props.options as TopStoriesOptions,
  props.class,
  'https://s3.tradingview.com/external-embedding/embed-widget-timeline.js'
);
</script>
