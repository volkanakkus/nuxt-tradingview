<template>
  <div>
    <DocsForexCrossRates :key="$colorMode.value" :options="options" />
  </div>
</template>

<script lang="ts" setup>
const { $colorMode } = useNuxtApp();

const options = computed(() => ({
  width: '100%',
  height: 450,
  colorTheme: $colorMode.value,
  currencies: ['EUR', 'USD', 'JPY', 'GBP', 'CHF', 'AUD', 'CAD', 'NZD'],
  isTransparent: false,
  locale: 'en',
}));
</script>
