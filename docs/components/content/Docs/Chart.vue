<template>
  <div>
    <DocsChart :key="$colorMode.value" :options="options" />
  </div>
</template>

<script lang="ts" setup>
const { $colorMode } = useNuxtApp();

const options = computed(() => ({
  width: '100%',
  height: '400',
  symbol: 'NASDAQ:AAPL',
  interval: 'D',
  timezone: 'Etc/UTC',
  theme: $colorMode.value,
  style: '1',
  backgroundColor: '#0C0C0D',
  locale: 'en',
  enable_publishing: false,
  allow_symbol_change: true,
  calendar: false,
}));
</script>
