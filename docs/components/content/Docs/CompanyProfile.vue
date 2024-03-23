<template>
  <div>
    <DocsCompanyProfile :key="$colorMode.value" :options="options" />
  </div>
</template>

<script lang="ts" setup>
const { $colorMode } = useNuxtApp();

const options = computed(() => ({
  width: '100%',
  height: 450,
  isTransparent: false,
  colorTheme: $colorMode.value,
  symbol: 'NASDAQ:AAPL',
  locale: 'en',
}));
</script>
