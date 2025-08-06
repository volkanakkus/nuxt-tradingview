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
import { companyProfileOptions } from '../data/defaultWidgetOptions';
import useInitWidget from '../composables/useInitWidget';

type CompanyProfileOptions = typeof companyProfileOptions & {
  [key: string]: unknown;
};

const props = withDefaults(defineProps<{
  options?: Partial<CompanyProfileOptions>
  class?: string
}>(), {
  class: 'company-profile',
  options: undefined
})

const { container, tradingview } = useInitWidget(
  companyProfileOptions as CompanyProfileOptions,
  props.options as CompanyProfileOptions,
  props.class,
  'https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js'
);
</script>
