<template>
  <div>
    <DocsFundamentalData :key="$colorMode.value" :options="options" />
  </div>
</template>

<script lang="ts" setup>
const { $colorMode } = useNuxtApp();

const options = computed(() => ({
  width: '100%',
  height: 450,
  colorTheme: $colorMode.value,
  isTransparent: false,
  largeChartUrl: '',
  displayMode: 'regular',
  symbol: 'NASDAQ:AAPL',
  locale: 'en',
}));
</script>
