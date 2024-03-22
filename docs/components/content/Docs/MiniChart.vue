<template>
  <div>
    <DocsMiniChart :key="$colorMode.value" :options="options" />
  </div>
</template>

<script lang="ts" setup>
const { $colorMode } = useNuxtApp();

const options = computed(() => ({
  width: '100%',
  height: 200,
  colorTheme: $colorMode.value,
  symbol: 'FX:EURUSD',
  locale: 'en',
  dateRange: '12M',
  isTransparent: false,
  autosize: false,
  largeChartUrl: '',
}));
</script>
