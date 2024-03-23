<template>
  <div>
    <DocsSymbolInfo :key="$colorMode.value" :options="options" />
  </div>
</template>

<script lang="ts" setup>
const { $colorMode } = useNuxtApp();

const options = computed(() => ({
  width: '100%',
  colorTheme: $colorMode.value,
  symbol: 'NASDAQ:AAPL',
  locale: 'en',
  isTransparent: false,
}));
</script>
