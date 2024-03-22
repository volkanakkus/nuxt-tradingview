<template>
  <div>
    <DocsTechnicalAnalysis :key="$colorMode.value" :options="options" />
  </div>
</template>

<script lang="ts" setup>
const { $colorMode } = useNuxtApp();

const options = computed(() => ({
  width: '100%',
  height: 450,
  colorTheme: $colorMode.value,
  interval: '1m',
  isTransparent: false,
  symbol: 'NASDAQ:AAPL',
  showIntervalTabs: true,
  displayMode: 'single',
  locale: 'en',
}));
</script>
